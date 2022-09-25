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
 
  constructor(private _http:HttpClient) {

   }

   get():Observable<EstadosI[]>{
    return this._http.get<EstadosI[]>(`/api/Estado`).pipe(tap((res:EstadosI[])=>{
    }),catchError((err)=>{
      return of(err);
    })
    );
  }

}
