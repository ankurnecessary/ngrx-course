import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { map, tap } from "rxjs/operators";
import { isLoggedIn } from "./auth.selectors";

@Injectable()
export class AuthGaurd implements CanActivate {

    constructor(
        private store: Store<AppState>,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.pipe(
            select(isLoggedIn),
            tap((loggedIn) => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
}
