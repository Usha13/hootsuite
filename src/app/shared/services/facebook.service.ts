import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  readonly rootURL = "http://localhost:3000/api";
  data : Array<Object>;

  constructor(private http : HttpClient,
    private toast : ToastrService, 
    private router: Router,
    private authService: SocialAuthService,
    private cookieService :CookieService
    ) { }

  async addFacebook() {
    try{
      if(this.cookieService.check('facebook0') && this.cookieService.check('facebook1')){
        this.toast.success("You Already Added 2 Facebook Accounts")
        return
      }
      const fbLoginOptions = {
        scope: 'email,public_profile,user_posts,pages_manage_posts'
      };
      const user = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID,fbLoginOptions);

      console.log(user)
      this.toast.success("Facebook Account Added Successfully")
      console.log(user.authToken)
      console.log(user.id)

      if(!this.cookieService.get('facebook0')){
        this.cookieService.set('facebook0', user.authToken)
        this.cookieService.set('fbid0', user.id)

        this.getprofile(0).subscribe((profile)=>{
          console.log(profile)
          this.gettimeline(0).subscribe((posts)=>{
            console.log(posts)
            this.storedata(profile,posts)
          })
        })

      }
      else{
        if(this.cookieService.get('fbid0') == user.id){
          this.cookieService.set('facebook0', user.authToken)

            this.getprofile(0).subscribe((profile)=>{
            console.log(profile)
            this.gettimeline(0).subscribe((posts)=>{
              console.log(posts)
              this.storedata(profile,posts)
              })
            })
        }
        else{
          this.cookieService.set('facebook1', user.authToken)
          this.cookieService.set('fbid1', user.id)

          this.getprofile(1).subscribe((profile)=>{
            console.log(profile)
            this.gettimeline(1).subscribe((posts)=>{
              console.log(posts)
              this.storedata(profile,posts)
              })
            })
        }
      }      
      console.log("finish")
      this.router.navigate(['dashboard/streams'])
    }
    catch(e){
      console.log(e)
    }
    
  }

  getprofile(index){
    
    var id = this.cookieService.get('fbid'+index)
    var access_token = this.cookieService.get('facebook'+index)
     
    return this.http.get(this.rootURL + "/facebook/getprofile?id="+id+"&&access_token="+access_token) 
  }

  gettimeline(index){
    
    var id = this.cookieService.get('fbid'+index)
    var access_token = this.cookieService.get('facebook'+index)
     
    return this.http.get(this.rootURL + "/facebook/getposts?id="+id+"&&access_token="+access_token) 
  }

  storedata(profile,posts){
    const user = JSON.parse(localStorage.getItem('user')) 
    const body = {
         userid: user._id,
         profile,
         posts
    }
    console.log(body)
    this.http.post(this.rootURL+"/facebook/storedata" , body ).subscribe((res)=>{
      console.log(res)
    },
    (e)=> console.log(e))
    return 
  }

  getdata(){
    const user = JSON.parse(localStorage.getItem('user')) 
    const body = { userid: user._id }
    return this.http.post(this.rootURL+"/facebook/getdata" , body );  
  }

  removeAccount(){
    this.cookieService.delete('facebook0', '/')
    this.cookieService.delete('facebook1', '/')
    this.cookieService.delete('fbid0', '/')
    this.cookieService.delete('fbid1', '/')
    console.log("removed")
  }


}
