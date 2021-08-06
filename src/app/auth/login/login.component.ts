import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : {Email, Password};
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$";
  constructor(private userService : UserService, private toast : ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onLogin(loginform: NgForm){
    this.userService.loginUser(this.user).subscribe((res: any)=>{
      this.toast.success("Login Successfully")
      localStorage.setItem("userToken", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      this.router.navigate(['dashboard'])
    },
    (e)=>{
      this.toast.error(e.error.error)
      console.log(e.error)
    })
  }

  resetForm(form? : NgForm){
    if(form!=null){
      form.reset();     
    }
    this.user = {Email :"", Password: ""};
    
  }
  googlesignin(){
    this.userService.signInWithGoogle();
    
  }
  fbsignin(){
    this.userService.signInWithFB();
  }

}
