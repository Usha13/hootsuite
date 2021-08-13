import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SocialComponent } from './social/social.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { AccountComponent } from './account/account.component';
import { InstaloginComponent } from './social/instalogin/instalogin.component';
import { StreamsComponent } from './streams/streams.component';
import { InstagramComponent } from './streams/instagram/instagram.component';
import { InstapostsComponent } from './streams/instagram/instaposts/instaposts.component';
import { ComposeComponent } from './compose/compose.component';
import { InstacomposeComponent } from './compose/instacompose/instacompose.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FacebookComponent } from './streams/facebook/facebook.component';
import { FbpostsComponent } from './streams/facebook/fbposts/fbposts.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SocialComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AccountComponent,
    InstaloginComponent,
    StreamsComponent,
    InstagramComponent,
    InstapostsComponent,
    ComposeComponent,
    InstacomposeComponent,
    FacebookComponent,
    FbpostsComponent
  ],
  
  imports: [
    SharedModule,
    DashboardRoutingModule,
    NgxDropzoneModule
  ],
  providers:[SidenavService]
  
})
export class DashboardModule { }
