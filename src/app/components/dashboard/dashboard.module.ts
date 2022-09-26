import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from '../home/home.component'
import { ReportsComponent } from "../reports/reports.component";
import { CatalogsComponent } from '../catalogs/catalogs.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EstadosService } from '../../services/estados/estados.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/spinner/interceptor.service';
import { ProvidesModule } from 'src/app/ProvidesMo';
@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    ReportsComponent,
    CatalogsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ProvidesModule.forRoot()
  ],
  providers:[EstadosService]
})
export class DashboardModule { }
