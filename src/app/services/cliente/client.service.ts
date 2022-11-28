import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, of, tap } from "rxjs";
import { ClientInterfaceI } from "src/app/models/client.interface";
import { JsonResponceI } from "src/app/models/JsonResponse";

@Injectable({
    providedIn: 'root'
  })
  export class ClientService {

    constructor(private _http:HttpClient) {

    }

    save(data : ClientInterfaceI){
        return this._http.post<JsonResponceI>('/api/Client/Create', data).pipe(tap((res:JsonResponceI)=>{
            if(res.codeResult = 200){
                return res.data
            }else{
                return res;
            }
        }),catchError((err)=>{
          return of(err);
        })
        );
    }

}