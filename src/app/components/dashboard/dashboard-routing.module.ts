import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from '../administracion/cliente/cliente.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent, children:[]},
  {path:'cliente', component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class DashboardRoutingModule { }
