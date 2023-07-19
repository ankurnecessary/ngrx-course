import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(authActions.login)
                , tap((action) => {
                    localStorage.setItem('user', JSON.stringify(action.user));
                })
            )
    }, { dispatch: false });

    logout$ = createEffect(() => {
        return this.actions$
            .pipe(
                ofType(authActions.logout)
                , tap((action) => {
                    localStorage.removeItem('user');
                    this.router.navigateByUrl('./login');
                })
            )
    }, { dispatch: false });

    constructor(
        private actions$: Actions
        , private router: Router
    ) { }

}
