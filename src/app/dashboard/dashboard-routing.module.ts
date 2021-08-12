import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AccountComponent } from './account/account.component';
import { ComposeComponent } from './compose/compose.component';
import { InstacomposeComponent } from './compose/instacompose/instacompose.component';
import { DashboardComponent } from './dashboard.component';
import { SocialComponent } from './social/social.component';
import { InstagramComponent } from './streams/instagram/instagram.component';
import { InstapostsComponent } from './streams/instagram/instaposts/instaposts.component';
import { StreamsComponent } from './streams/streams.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate : [AuthGuard],
    canActivateChild: [AuthGuard],
    children : [
      {
        path: '',
        redirectTo : 'social',
        pathMatch: 'full'
      },
      {
        path: 'social',
        component : SocialComponent
      },
      {
        path: 'account',
        component : AccountComponent
      },
      {
        path: 'streams',
        component : StreamsComponent,
        children:[
          {
            path: 'instagram',
            component : InstagramComponent,
            children : [
              {
                path: '',
                redirectTo : '0',
                pathMatch: 'full'
              }, 
              {
                path: ':id',
                component : InstapostsComponent
              }
            ]
          },
        ]
      },
      {
        path: 'compose',
        component : ComposeComponent,
        children:[
          {
            path: '',
            redirectTo : 'instagram',
            pathMatch: 'full'
          },
          {
            path: 'instagram',
            component : InstacomposeComponent,
           
          },
        ]
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
