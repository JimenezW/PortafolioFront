import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./MaterialModule";
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProvidesModule } from './ProvidesMo';
import { SublevelMenuComponent } from './components/dashboard/navbar/sublevel-menu/sublevel-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    BodyComponent,
    SublevelMenuComponent,
  ],
  //entryComponents:[LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ProvidesModule.forRoot()
  ],
  exports:[HttpClientModule, CommonModule, BrowserAnimationsModule, NavbarComponent, BodyComponent],
  providers: [
    //{provide:HTTP_INTERCEPTORS, useClass : InterceptorService}
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


