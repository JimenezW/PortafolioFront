import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JwtResponseI } from "../models/jwt-response";
import { UserI } from "../models/user";
import { catchError, tap } from "rxjs/operators";
import { Observable, BehaviorSubject, of } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { ApiSetting } from '../app-settings-api';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = ApiSetting.Api;
  autSubject = new BehaviorSubject(false);
  private token: string = "";

  constructor(private _http:HttpClient,
    private _cookie : CookieService,
    private jwtHelper: JwtHelperService) { }

  register(user:UserI):Observable<JwtResponseI>{
    return this._http.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,user).pipe(tap((res:JwtResponseI)=>{
      if(res){
        //guardar token
        this.saveToken(res.token,res.expireAt);
      }
    })
    );
  }

  login(user:UserI):Observable<JwtResponseI>{
    return this._http.post<JwtResponseI>(`/api/login`,user).pipe(tap((res:JwtResponseI)=>{
      
      if(res){
        //guardar token
        this.saveToken(res.token,res.expireAt);

      }
    }),catchError((err)=>{
      return of(err);
    })
    );
  }

  logout():void{
    this.token='';
    this._cookie.deleteAll();
    
  }

  private saveToken(token:string, expiresIn:string):void{
    this.token=token;

    //let expireInTem : number = +expiresIn

    let dateExpire = new Date(expiresIn).setHours(-24);
    
    //dateExpire.setSeconds(expireInTem);

    this._cookie.set('access_token',token,dateExpire,'/')
    this._cookie.set('dateExpire',expiresIn)
  }

  public isLoggedIn() {
    const token: string = this.getToken();

    return token != '' && !this.jwtHelper.isTokenExpired(token);
  }

  public getToken() : string {
    this.token = "";
    if(this._cookie.get('access_token'))
    this.token = this._cookie.get('access_token');
    
    return this.token;
  }

}
