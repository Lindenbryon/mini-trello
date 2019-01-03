import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  DashboardComponent } from '../components/dashboard/dashboard.component';
import { TDashboardComponent } from '../components/t-dashboard/t-dashboard.component';
import { NotFoundComponentComponent } from '../components/not-found-component/not-found-component.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'board/:id',
    component: TDashboardComponent
  },
  {
    path: '404',
    component: NotFoundComponentComponent
  },
  {
    path: '**',
    component: NotFoundComponentComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
