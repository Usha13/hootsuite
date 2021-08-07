import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter, map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  readonly rootURL = "http://localhost:3000/api";
  data : Array<Object>;

  constructor(private http : HttpClient,
    private toast : ToastrService, 
    private router: Router,
    ) { }
  
    
  
  loginUser(user){
    const body = {
      username: user.username,
      password: user.password
    }
    console.log(body)
    this.http.post(this.rootURL + "/insta/login" ,body).subscribe((res:any)=> {
      this.storedata(res.profile, res.photos)
      this.toast.success("Instagram login Successfully")
      this.router.navigate(['dashboard/streams/instagram'])
    },
    (e)=>{
      this.toast.error(e.error.error)
      console.log(e.error)
    });
  }

  logoutUser(){
    return this.http.get(this.rootURL + "/insta/logout");
  }

  getprofile(){
    return this.http.get(this.rootURL + "/insta/profile"); 
  }

  getphotos(){
    return this.http.get(this.rootURL + "/insta/photos"); 
  }

  storedata(profile,posts){
    const user = JSON.parse(localStorage.getItem('user')) 
    const body = {
         userid: user._id,
         profile,
         posts
    }
    console.log(body)
    this.http.post(this.rootURL+"/insta/storedata" , body ).subscribe((res)=>{
      console.log(res)
    },
    (e)=> console.log(e))
    return 
  }

  getdata(){
    const user = JSON.parse(localStorage.getItem('user')) 
    const body = { userid: user._id }
    return this.http.post(this.rootURL+"/insta/getdata" , body );  
  }


  
}
