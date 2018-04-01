import { Action } from '@ngrx/store';

import { type } from '../../utils';
import { BackendResponse } from '../../services';
import { User } from './models';


/**
 * Authentication related action types.
 */
export const ActionTypes = {
    AUTHENTICATE: type('[auth] Authenticate'),
    LOGIN_SUCCESS: type('[auth] Login success'),
    LOGOUT: type('[auth] Logout'),
    LOGOUT_SUCCESS: type('[auth] Logout success'),
    LOAD_AUTH_COOKIE: type('[auth] Load cookie')
};

/**
 * Authenticate user.
 */
export class AuthenticateAction implements Action {
    readonly type = ActionTypes.AUTHENTICATE;

    constructor(public payload: BackendResponse) {}
}

/**
 * Login has succeeded.
 */
export class LoginSuccessAction implements Action {
    readonly type = ActionTypes.LOGIN_SUCCESS;

    constructor(public payload: User) {}
}

/**
 * Logout user.
 */
export class LogoutAction implements Action {
    readonly type = ActionTypes.LOGOUT;
}

/**
 * Logout has succeeded.
 */
export class LogoutSuccessAction implements Action {
    readonly type = ActionTypes.LOGOUT_SUCCESS;

    constructor(public redirectView: string) {}
}

/**
 * User authentication cookie is saved.
 */
export class UserCookieLoadAction implements Action {
    readonly type = ActionTypes.LOAD_AUTH_COOKIE;
}

export type Actions =
    | AuthenticateAction
    | LoginSuccessAction
    | LogoutAction
    | LogoutSuccessAction
    | UserCookieLoadAction;
