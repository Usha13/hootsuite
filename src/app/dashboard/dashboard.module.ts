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


@NgModule({
  declarations: [
    DashboardComponent,
    SocialComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  providers:[SidenavService]
  
})
export class DashboardModule { }
