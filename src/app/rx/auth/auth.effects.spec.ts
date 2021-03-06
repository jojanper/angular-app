import { TestBed, async } from '@angular/core/testing';
import { EffectsMetadata, getEffectsMetadata } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { HttpTestingController } from '@angular/common/http/testing';

import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';
import { User } from './models';
import {
    BackendResponse, AppEventsService, ApiService,
    NetworkService, AlertService, RouterService
} from '../../services';
import { TestServiceHelper, TestHttpHelper, ResponseFixtures } from '../../../test_helpers';


const rootApi = ApiService.rootUrl;
const logoutUrl = ResponseFixtures.root.data[3].url;

const responses = {};
responses[rootApi] = ResponseFixtures.root;
responses[logoutUrl] = JSON.stringify({});

const user = {
    email: 'test@test.com',
    expires: 123456,
    validAt: Date.now()
} as User;


const AUTHROUTES = {
    url: 'auth',
    children: [
        {
            url: 'login',
            name: 'auth.login-view',
            menuTitle: 'Sign in'
        }
    ]
};


describe('AuthEffects', () => {
    let authEffects: AuthEffects;
    const actions = new ReplaySubject(1);
    let metadata: EffectsMetadata<AuthEffects>;

    let mockBackend: HttpTestingController;

    const mockCookie = new TestServiceHelper.CookieService();
    const cookieService = mockCookie.getService();

    const mockRouteManager = new TestServiceHelper.RouterService([
        {
            url: '',
            name: 'home-view'
        },
        AUTHROUTES
    ]);

    let eventSend = false;
    const mockEvents = {
        sendEvent: () => {
            eventSend = true;
        }
    };

    beforeEach(done => {
        TestBed.configureTestingModule({
            imports: TestHttpHelper.http,
            providers: [
                AuthEffects,
                NetworkService,
                ApiService,
                AlertService,
                provideMockActions(() => actions),
                { provide: CookieService, useValue: cookieService },
                { provide: AppEventsService, useValue: mockEvents },
                { provide: RouterService, useValue: mockRouteManager }
            ]
        }).compileComponents().then(() => {
            cookieService.removeAll();

            authEffects = TestBed.get(AuthEffects);
            metadata = getEffectsMetadata(authEffects);

            mockBackend = TestHttpHelper.getMockBackend();

            done();
        });
    });

    afterEach(() => {
        actions.complete();
    });

    it('should register authenticate$ that dispatches an action', () => {
        expect(metadata.authenticate$).toEqual({ dispatch: true, resubscribeOnError: true });
    });

    it('should respond to authenticateAction', () => {
        const loginResponse = { data: user } as BackendResponse;
        const action = AuthActions.authenticateAction({ payload: loginResponse });
        actions.next(action);

        authEffects.authenticate$.subscribe((response) => {
            // Action returns another action
            expect(response.type).toEqual(AuthActions.loginSuccessAction({ payload: user }).type);

            // And user authentication cookie is available
            const cookie = cookieService.getObject('user-auth-cookie');
            expect(cookie['email']).toEqual(user.email);
        });
    });

    it('user cookie is not found by userCookieLoadAction', () => {
        const action = AuthActions.userCookieLoadAction();
        actions.next(action);

        authEffects.loadCookie$.subscribe((response) => {
            // Redirect to home view
            expect(response['redirectView']).toEqual('home-view');
        });
    });

    it('user cookie is found by userCookieLoadAction', (done) => {
        cookieService.putObject('user-auth-cookie', user);

        const action = AuthActions.userCookieLoadAction();
        actions.next(action);

        authEffects.loadCookie$.subscribe((response) => {
            // Action returns another action
            expect(response.type).toEqual(AuthActions.loginSuccessAction({ payload: user }).type);
            done();
        });
    });

    it('should register logoutSuccess$ that dispatches an action', () => {
        expect(metadata.logoutSuccess$).toEqual({ dispatch: true, resubscribeOnError: true });
    });

    it('user cookie is removed on logoutSuccessAction', () => {
        cookieService.putObject('user-auth-cookie', user);

        const action = AuthActions.logoutSuccessAction({ redirectView: 'auth.login-view' });
        actions.next(action);

        authEffects.logoutSuccess$.subscribe((response) => {
            // No user cookie present
            const cookie = cookieService.getObject('user-auth-cookie');
            expect(cookie).toBeUndefined();

            // Action returns another action that redirects to specified view
            expect(response.path).toEqual(['/auth/login']);

            // Logout event has been sent
            expect(eventSend).toBeTruthy();
        });
    });

    it('logoutAction: user logout succeeds', async(() => {
        const action = AuthActions.logoutAction();
        actions.next(action);

        authEffects.logout$.subscribe((response) => {
            // Action returns another action
            expect(response.type).toEqual(AuthActions.logoutSuccessAction({ redirectView: '' }).type);
        });

        mockBackend.expectOne(rootApi).flush(responses[rootApi]);
        mockBackend.expectOne(logoutUrl).flush(responses[logoutUrl]);
        mockBackend.verify();
    }));

    it('logoutAction: user logout fails', async(() => {
        const action = AuthActions.logoutAction();
        actions.next(action);

        authEffects.logout$.subscribe((response) => {
            // Action returns another action that redirects to specified view
            expect(response['path']).toEqual(['/']);
        });

        mockBackend.expectOne(rootApi).flush(responses[rootApi]);
        const data = JSON.stringify({ errors: ['Error'] });
        mockBackend.expectOne(logoutUrl).error(new ErrorEvent(data), { status: 404 });
        mockBackend.verify();
    }));
});
