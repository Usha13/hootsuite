import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SocialComponent } from './social/social.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children : [
      {
        path: 'social',
        component : SocialComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
