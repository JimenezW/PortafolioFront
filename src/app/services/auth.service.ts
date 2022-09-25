import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JwtResponseI } from "../models/jwt-response";
import { UserI } from "../models/user";
import { catchError, tap } from "rxjs/operators";
import { Observable, BehaviorSubject, of } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { ApiSetting } from '../app-settings-api'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //AUTH_SERVER: string = ApiSetting.ApiAuth;
  AUTH_SERVER: string = ApiSetting.Api;
  autSubject = new BehaviorSubject(false);
  private token: string = "";

  constructor(private _http:HttpClient,
    private _cookie : CookieService) { }

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

  logout(){
    this.token='';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token:string, expiresIn:string):void{
    this.token=token;

    let expireInTem : number = +expiresIn

    let dateExpire = new Date();
    
    dateExpire.setSeconds(expireInTem);

    this._cookie.set('access_token',token,dateExpire,'/')
  }

  private getToken():string{
    if(!this.token)
    this._cookie.get('access_token');
    
    return this.token;
  }

}
