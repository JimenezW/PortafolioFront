import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JwtResponseI } from "../models/jwt-response";
import { UserI } from "../models/user";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000';
  autSubject = new BehaviorSubject(false);
  private token: string = "";

  constructor(private _http:HttpClient) { }

  register(user:UserI):Observable<JwtResponseI>{
    return this._http.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,user).pipe(tap((res:JwtResponseI)=>{
      if(res){
        //guardar token
        this.saveToken(res.dataUser.accessToken,res.dataUser.expireIn);
      }
    })
    );
  }

  login(user:UserI):Observable<JwtResponseI>{
    return this._http.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,user).pipe(tap((res:JwtResponseI)=>{
      if(res){
        //guardar token
        debugger
        this.saveToken(res.dataUser.accessToken,res.dataUser.expireIn);

      }
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
    localStorage.setItem('ACCESS_TOKEN',token);
    localStorage.setItem('EXPIRES_IN',expiresIn);
  }

  private getToken():string{
    if(!this.token)
    this.token = localStorage.getItem('ACCESS_TOKEN') as string;
    
    return this.token;
  }

}
