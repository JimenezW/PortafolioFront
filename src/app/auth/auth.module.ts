import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from "./register/register.component";
import { AuthRoutingModule } from "./auth-ruting.module";
import { AuthService } from "../services/auth.service";
import { MaterialModule } from "../MaterialModule";
import { InterceptorService } from '../services/spinner/interceptor.service';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
    MaterialModule,
    
  ],
  //exports:[MaterialModule],
  providers:[AuthService,
    {provide:HTTP_INTERCEPTORS, useClass : InterceptorService, multi : false}]
})
export class AuthModule { }
