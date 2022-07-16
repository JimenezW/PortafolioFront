import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogsComponent } from '../catalogs/catalogs.component';
import { HomeComponent } from '../home/home.component';
import { ReportsComponent } from '../reports/reports.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent,children:[
    {path:'', component : HomeComponent},
    {path:'reports',component:ReportsComponent},
    {path:'catalogs',component:CatalogsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
