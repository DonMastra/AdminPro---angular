import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress bars'} },
      { path: 'charts', component: Grafica1Component, data: { title: 'Charts'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account settings'} },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJs'} }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
