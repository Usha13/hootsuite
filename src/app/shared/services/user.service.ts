import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootURL = "http://localhost:3000/api";
  user : User;

  constructor(private http : HttpClient,
    private toast : ToastrService, 
    private router: Router,
    private authService: SocialAuthService,
    ) { }

 
  registerUser(user){
    const body = {
        username : user.Username,
        email : user.Email,
        password: user.Password
    }
    return this.http.post(this.rootURL + "/user/emailsignup" , body );
  }

  loginUser(user){
    const body = {
      email: user.Email,
      password: user.Password
    }
    return this.http.post(this.rootURL + "/user/emaillogin" , body );
  }

  logoutUser(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    this.authService.signOut()
    this.router.navigate(['login']);
  }

  async signInWithGoogle(){ 
    try{
      const user = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      console.log(user)
      let body = {
          username : user.name,
          email : user.email,
          picture: user.photoUrl,
          token: user.authToken,
          provider : "Google"
        }

      this.http.post(this.rootURL + "/user/googlesignup" , body ).subscribe((res : any)=> {
        console.log(res)
        localStorage.setItem("userToken", res.token);
        localStorage.setItem("user", JSON.stringify(res));
      })
 
    }
    catch(e){
      console.log(e)
    }
  }

  async signInWithFB() {
    try{
      const fbLoginOptions = {
        scope: 'email,public_profile,user_posts'
      };
      const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID,fbLoginOptions);
      // const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      console.log(user)
      this.toast.success("Login Successfully")
      localStorage.setItem("userToken", user.authToken);
      this.router.navigate(['dashboard'])
    }
    catch(e){
      console.log(e)
    }
    
  }



  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getprofile(){ 
      const user = JSON.parse(localStorage.getItem('user'));
      return user
  }

}
