import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstadosService } from '../../services/estados/estados.service';
import { ProvidesModule } from 'src/app/ProvidesMo';
import { MunicipioService } from 'src/app/services/municipios/municipio.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    DashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserModule
    //ProvidesModule.forRoot()
  ],
  providers:[EstadosService, MunicipioService]
})
export class DashboardModule { }
