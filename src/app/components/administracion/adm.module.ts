import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule,
    ProvidesModule.forRoot()
  ],
  exports : [
    FormsModule
  ]
})
export class AdmModule { }
