import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiSetting } from 'src/app/app-settings-api';
import { EstadosI } from 'src/app/models/estados';
import { catchError, tap } from "rxjs/operators";
import { Observable, BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  AUTH_SERVER: string = ApiSetting.Api;
  constructor(private _http:HttpClient) {

   }

   get():Observable<EstadosI>{
    return this._http.get<EstadosI>(`${this.AUTH_SERVER}/api/Estado`).pipe(tap((res:EstadosI)=>{
    }),catchError((err)=>{
      return of(err);
    })
    );
  }

}
