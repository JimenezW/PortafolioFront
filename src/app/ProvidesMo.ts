import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { UrlInterceptorService } from "./services/interceptors/url.interceptor-service";
import { InterceptorService } from "./services/spinner/interceptor.service";

@NgModule({
    declarations: [],
  })
  export class ProvidesModule{
    constructor(@Optional() @SkipSelf() parentModule: ProvidesModule) {
      if (parentModule) {
        //console.warn('ProvidesModule is already loaded. Consider import it in the AppModule only if you are only' +
          //'using its providers');
      }
    }
  
    static forRoot(config?: any): ModuleWithProviders<any> {
    return {
      ngModule: ProvidesModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true
        },
        {
          provide:HTTP_INTERCEPTORS,
          useClass: UrlInterceptorService,
          multi: true
        }
      ]
    }
  
  }
  }