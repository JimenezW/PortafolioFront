import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/aut/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuard implements CanActivate {

  constructor(
    private _cokieSer: CookieService,
    private _router:Router,
    private autService : AuthService
  ){

  }

  redirect(flag:boolean):any{
    if(flag){
      this._router.navigateByUrl('/dashboard');
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const cookie = this.autService.isLoggedIn();

      if(!cookie)
        this.autService.logout();

    return true;
  }

    
}