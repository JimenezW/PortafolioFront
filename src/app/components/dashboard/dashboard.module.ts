import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component'
import { EstadosService } from '../../services/estados/estados.service';
import { ProvidesModule } from 'src/app/ProvidesMo';
import { MunicipioService } from 'src/app/services/municipios/municipio.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    BrowserAnimationsModule
    //BrowserModule
    //ProvidesModule.forRoot()
  ],
  providers:[EstadosService, MunicipioService]
})
export class DashboardModule { }
