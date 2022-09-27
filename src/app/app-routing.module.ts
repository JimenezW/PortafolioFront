import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(x=>x.AuthModule) },
  {
    path:'dashboard',
    loadChildren:()=>import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule), 
    canActivate:[VigilanteGuard]}
    /*{ path: '', component:DashboardComponent },
    {path:'dashboard', component:DashboardComponent}*/
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
