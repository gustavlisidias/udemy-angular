import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
// import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { Page404Component } from './pages/page404/page404.component';
import { HomeGuardsComponent } from './shared/home-guards/home-guards.component';
import { AccountGuardsComponent } from './shared/account-guards/account-guards.component';
import { DashboardGuardsComponent } from './shared/dashboard-guards/dashboard-guards.component';
import { LeadsGuardsComponent } from './shared/leads-guards/leads-guards.component';

// Guards
import { canActiveGuard } from './shared/guards/can-active.guard';
import { canDeactiveGuard } from './shared/guards/can-deactive.guard';
import { canLoadGuard } from './shared/guards/can-load.guard';
import { canActivateChildGuard } from './shared/guards/can-activate-child.guard';

const routes: Routes = [
  // {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '', component: HomeGuardsComponent, pathMatch: 'full'},

  {
    path: 'account', 
    component: AccountGuardsComponent, 
    canActivate: [canActiveGuard], 
    canDeactivate: [canDeactiveGuard]
  },

  {
    path: 'sobre', 
    component: SobreComponent, 
    children: [{path: ':id', component: SobreComponent},]
  },

  {
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivateChild: [canActivateChildGuard]
  },

  {
    path: 'dashboard-guards', 
    component: DashboardGuardsComponent,
    canMatch: [canLoadGuard]
  },

  {path: 'leads', component: LeadsGuardsComponent},
  {path: '404', component: Page404Component},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }