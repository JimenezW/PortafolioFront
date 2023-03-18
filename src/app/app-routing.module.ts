import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AutGuard } from './services/VigilateGuards/aut.guards';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(x=>x.AuthModule), canActivate: [AutGuard] },
  {
    path:'dashboard',
    loadChildren:()=>import('./components/dashboard/dashboard.module').then(x=>x.DashboardModule), 
    canActivate:[VigilanteGuard]},
    {
      path:'adm',
      loadChildren:()=> import('./components/administracion/adm.module').then(x=>x.AdmModule), canActivate:[VigilanteGuard]
    }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
