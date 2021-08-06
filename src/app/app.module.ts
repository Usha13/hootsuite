import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SplashComponent } from './splash/splash.component';
import { SharedModule } from './shared/shared.module';
import { UserService } from './shared/services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard} from './auth/auth.guard';
import { InstagramService } from './shared/services/instagram.service';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, AuthGuard, InstagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
