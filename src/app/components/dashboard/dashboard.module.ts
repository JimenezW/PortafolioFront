import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component'
import { ReportsComponent } from "../reports/reports.component";
import { CatalogsComponent } from '../catalogs/catalogs.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EstadosService } from '../../services/estados/estados.service';
import { HttpClientModule } from '@angular/common/http';
import { ProvidesModule } from 'src/app/ProvidesMo';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ReportsComponent,
    CatalogsComponent,
   // BodyComponent
  ],
  imports: [
    CommonModule,
    //DashboardRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ProvidesModule.forRoot()
  ],
  providers:[EstadosService]
})
export class DashboardModule { }
