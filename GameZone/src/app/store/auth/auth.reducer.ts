import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
    user: any;
}

export const initialState: AuthState = {
    user: null
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.loginSuccess, (state, { user, token }) => {
        localStorage.setItem('token', token); // Store token in localStorage
        return { ...state, user };
    }),
    on(AuthActions.logout, (state) => {
        localStorage.removeItem('token'); // Clear token on logout
        return { ...state, user: null };
    })
);
