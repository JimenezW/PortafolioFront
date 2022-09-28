import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/MaterialModule';
import { ProvidesModule } from 'src/app/ProvidesMo';
import { ClienteComponent } from './cliente/cliente.component';
import { UsersComponent } from './users/users.component';
import { AdmRoutingModule } from './adm.routing';



@NgModule({
  declarations: [
    ClienteComponent,
    UsersComponent
  ],
  imports: [
    AdmRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ProvidesModule.forRoot()
  ]
})
export class AdmModule { }
