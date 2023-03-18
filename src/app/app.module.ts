import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from "./MaterialModule";
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProvidesModule } from './ProvidesMo';
import { SublevelMenuComponent } from './components/dashboard/navbar/sublevel-menu/sublevel-menu.component';
import { JwtHelperService, JWT_OPTIONS   } from '@auth0/angular-jwt';
import { MessageTemplateComponent } from './util.service/message/component/messageTemplate.component';
import { GridComponentComponent } from './util.service/grid/componet/grid.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerComponent,
    BodyComponent,
    SublevelMenuComponent,
    MessageTemplateComponent,
    GridComponentComponent
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
  exports:[HttpClientModule, NavbarComponent, BodyComponent, MessageTemplateComponent, GridComponentComponent],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


