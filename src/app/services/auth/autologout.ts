import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription, timer } from 'rxjs';
import { filter, switchMap, map } from 'rxjs/operators';

import { logoutAction } from '../../rx/auth';
import { selectUserState } from '../../rx/rx.reducers';
import { AlertService } from '../alert';


@Injectable()
export class AutoLogout implements OnDestroy {
    loginSubscription: Subscription;
    logoutSubscription: Subscription;

    constructor(private store: Store<any>, protected alertService: AlertService) {
        this.loginSubscription = null;
        this.loginMonitor();
        this.logoutMonitor();
    }

    /**
     * Start session expiration timer every time user state changes to authenticated state.
     */
    private loginMonitor() {
        // Unsubscribe previous subscription, this may be needed if user state changes
        // to unauthenticated state before sesson timer has expired.
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }

        this.loginSubscription = this.store.pipe(
            select(selectUserState),

            // When user state changes to authenticated, start the session timer
            filter(state => state.authenticated),
            switchMap(state => timer(state.user.validAt - Date.now())),
            map(() => {
                // Let the user know that session has expired
                this.alertService.info('Your session has expired, logging out...');

                // Wait some time since logout clears all alert messages
                return timer(3000);
            })
        )
            .subscribe(() => this.store.dispatch(logoutAction()));
    }

    private logoutMonitor() {
        // Every time user state changes to unauthenticated state,
        // restart user authentication status monitoring
        this.logoutSubscription = this.store.pipe(
            select(selectUserState),
            filter(user => !user.authenticated)
        )
            .subscribe(() => this.loginMonitor());
    }

    ngOnDestroy() {
        this.loginSubscription.unsubscribe();
        this.logoutSubscription.unsubscribe();
    }
}
