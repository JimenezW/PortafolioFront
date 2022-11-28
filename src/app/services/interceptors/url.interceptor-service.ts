import { HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
 } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { 
    Observable, 
    throwError } from "rxjs";
import { 
    catchError } from 'rxjs/operators';
import { AuthService } from "../auth.service";
import { MessageLogin } from '../../globalsConst/message.login'
import { Router } from "@angular/router";


@Injectable()

export class UrlInterceptorService implements HttpInterceptor{

    constructor(private autService : AuthService,
        private _snackBar: MatSnackBar,
        private _router : Router){
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
       /* let isToken = '';
        if(this.autService.isLoggedIn()){
            isToken = this.autService.getToken();
        }

        if(isToken){
            req = req.clone({
                setHeaders: { 
                    Authorization : `Bearer ${isToken}`,
                    Accept :'',
                    Connetion : 'keep-alive',
                    "Content-Type": "application/json" 
                }
            });
        }
        
        return next.handle(req).pipe( );*/

        return next.handle(this.addAuthToken(request)).pipe(
            catchError((requestError : HttpErrorResponse) => {
                if(requestError && requestError.status === 401){
                    let snackBar = this._snackBar.open(MessageLogin.expirtSession, 'Cerrar sesion', 
                    {
                        horizontalPosition: 'center',
                        verticalPosition: 'top'
                    });

                    snackBar.afterDismissed().subscribe(()=>{
                        this.autService.logout();
                        this._router.navigateByUrl('/');
                    });
                }
                
                return throwError(()=> new Error(requestError.message))
            })
        );

    }

    private addAuthToken(request:HttpRequest<any>){
        let isToken = '';
        if(!this.autService.isLoggedIn())
        return request;
        

        isToken = this.autService.getToken();
        
        if(!isToken)
        return request;

        return request.clone({
            setHeaders: { 
                Authorization : `Bearer ${isToken}`,
                Accept :'*/*',
                Connetion : 'keep-alive',
                "Content-Type": "application/json" 
            }
        });
    }
    

}