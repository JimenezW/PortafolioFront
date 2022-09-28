import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from '../administracion/cliente/cliente.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path: '', redirectTo: '/adm/cliente', pathMatch: 'full' },
    {path:'cliente', component:ClienteComponent},
    {path:'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AdmRoutingModule { }