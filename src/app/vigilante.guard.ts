import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {

  constructor(
    private _cokieSer: CookieService,
    private _router:Router
  ){

  }

  redirect(flag:boolean):any{
    if(!flag){
      
      this._router.navigateByUrl('/auth/login');
      
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const cookie = this._cokieSer.check('access_token');

    this.redirect(cookie);

    return true;
  }
  
}
