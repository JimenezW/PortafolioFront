import { HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
 } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { 
    Observable, 
    throwError } from "rxjs";
import { 
    catchError } from 'rxjs/operators';
import { AuthService } from "../aut/auth.service";
import { Message } from '../../globalsConst/messagesGlobals'
import { Router } from "@angular/router";
//import { MessagueGenericService } from "src/app/util.service/message/messageGeneric.Service";


@Injectable()

export class TokenInterceptorService implements HttpInterceptor{

    constructor(private autService : AuthService,
        private _router : Router,
        //private _messague: MessagueGenericService
        )
    {
        
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {

        if(request.url === '/api/login')
        return next.handle(request).pipe();

        return next.handle(this.addAuthToken(request)).pipe(
            catchError((requestError : HttpErrorResponse) => {
                if(requestError && requestError.status === 401){
                   /* let snackBar = this._snackBar.open(Message.Login.expitSession, 'Cerrar sesion', 
                    {
                        horizontalPosition: 'center',
                        verticalPosition: 'top'
                    });

                    snackBar.afterDismissed().subscribe(()=>{
                        this.autService.logout();
                        this._router.navigateByUrl('/');
                    });*/
                    console.log('Aviso', Message.Login.expitSession);

                }

                if(requestError && requestError.status === 504){
                    //this._messague.message('Aviso', Message.Generics.ConnectError, 3)
                    console.log('Aviso', Message.Generics.ConnectError);
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