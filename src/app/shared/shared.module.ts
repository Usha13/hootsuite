import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './modules/app-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  exports:[
    CommonModule,
    AppMaterialModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers:[
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('129689287280-d751s7urhkjbn5ktadc0ut6rstpjj41g.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('565740031109677')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class SharedModule { }
