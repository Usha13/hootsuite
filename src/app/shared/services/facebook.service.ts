import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private http : HttpClient,
    private toast : ToastrService, 
    private router: Router,
    private authService: SocialAuthService,
    private cookieService :CookieService
    ) { }

  async addFacebook() {
    try{
      const fbLoginOptions = {
        scope: 'email,public_profile,user_posts'
      };
      const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID,fbLoginOptions);
      // const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      console.log(user)
      this.toast.success("Facebook Account Added Successfully")
      this.cookieService.set('facebook', user.authToken)
      this.cookieService.set('fbid', user.id)
      console.log(this.cookieService.get('facebook'))
      console.log(this.cookieService.get('fbid'))
      this.router.navigate(['dashboard/streams'])
    }
    catch(e){
      console.log(e)
    }
    
  }


}
