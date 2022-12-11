import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { TokenInterceptorService } from "../services/interceptors/token.interceptor.service";
import { SpinnerInterceptorService } from "../services/interceptors/spinner.interceptor.service";

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
          useClass: SpinnerInterceptorService,
          multi: true
        },
        {
          provide:HTTP_INTERCEPTORS,
          useClass: TokenInterceptorService,
          multi: true
        }
      ]
    }
  
  }
  }