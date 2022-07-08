import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from "./register/register.component";
import { AuthRoutingModule } from "./auth-ruting.module";
import { AuthService } from "../services/auth.service";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
