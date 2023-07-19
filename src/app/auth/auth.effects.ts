import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

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

    constructor(private actions$: Actions) { }

}
