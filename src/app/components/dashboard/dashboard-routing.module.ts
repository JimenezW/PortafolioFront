import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ReportsComponent } from '../reports/reports.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent,children:[
    {path:'', component : HomeComponent},
    {path:'reports',component:ReportsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
