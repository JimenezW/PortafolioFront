import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/MaterialModule';
import { ProvidesModule } from 'src/app/ProvidesMo';
import { ClienteComponent } from './cliente/cliente.component';
import { UsersComponent } from './users/users.component';
import { AdmRoutingModule } from './adm.routing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClienteComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    //ProvidesModule.forRoot()
  ],
  exports : [
    FormsModule
  ]
})
export class AdmModule { }
