import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { goAction } from '../../router';
import { RouterService } from '../router';
import { getUserAuthenticationStatus } from '../../rx/rx.reducers';


@Injectable()
export class AuthGuard implements CanActivate {
    private redirectUrl: string;

    constructor(private store: Store<any>, routerService: RouterService) {
        this.redirectUrl = routerService.resolveByName('auth.login-view');
    }

    canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        const observable = this.store.pipe(
            select(getUserAuthenticationStatus)
        );

        observable.subscribe(authenticated => {
            if (!authenticated) {
                // User is not logged in so redirect to login page with the return url
                this.store.dispatch(goAction({
                    path: [this.redirectUrl],
                    query: { returnUrl: (state) ? state.url : '' }
                }));
            }
        });

        return observable;
    }
}
