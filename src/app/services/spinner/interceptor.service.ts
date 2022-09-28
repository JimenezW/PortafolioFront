import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { finalize } from "rxjs/operators";


@Injectable()

export class InterceptorService implements HttpInterceptor{
    
    constructor(private spinnerService : SpinnerService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Hola interceptor')
        return next.handle(req).pipe(
            finalize(()=> this.spinnerService.isLoading.next(false))
        );
    }

    

}



