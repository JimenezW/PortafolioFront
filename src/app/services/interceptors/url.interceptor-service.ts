import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, finalize } from "rxjs";
import { AuthService } from "../auth.service";


@Injectable()

export class UrlInterceptorService implements HttpInterceptor{
    
    constructor(private autService : AuthService, private router:Router){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let isToken = '';
        if(this.autService.isLoggedIn()){
            isToken = this.autService.getToken();
        }

        if(isToken){
            req = req.clone({
                setHeaders: { 
                    Authorization : `Bearer ${isToken}`,
                    Accept :'*/*',
                    Connetion : 'keep-alive',
                    "Content-Type": "application/json" 
                }
            });
        }
        
        return next.handle(req).pipe(
           // finalize(()=> this.spinnerService.isLoading.next(false))
        );
    }

    

}