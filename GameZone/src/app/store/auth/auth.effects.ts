import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { mergeMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap((action) =>
                this.authService.login(action.credentials).pipe(
                    map((response) => {
                        const user = response.user;  // Extract user data from API response
                        const token = response.token;  // Extract JWT token from API response
                        return AuthActions.loginSuccess({ user, token });
                    })
                )
            )
        )
    );
}
