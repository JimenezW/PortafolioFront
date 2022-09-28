import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/MaterialModule';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EstadosService } from '../../services/estados/estados.service';
import { ProvidesModule } from 'src/app/ProvidesMo';
import { ClienteComponent } from '../administracion/cliente/cliente.component';
import { UsersComponent } from '../administracion/users/users.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ClienteComponent,
    UsersComponent
  ],
  imports: [
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ProvidesModule.forRoot()
  ],
  providers:[EstadosService]
})
export class DashboardModule { }
