import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ credentials: { email: string; password: string } }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ user: any, token: string }>());
export const logout = createAction('[Auth] Logout');
