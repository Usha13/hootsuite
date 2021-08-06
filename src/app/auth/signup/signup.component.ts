import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]$";
  user ;
  constructor(private userService : UserService, private toast : ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm()
  }
   
  onSubmit(signupform: NgForm){
    this.userService.registerUser(this.user).subscribe((res)=>{
      this.toast.success("Sign Up Successfully")
      console.log(res)
      this.router.navigate(['dashboard'])
    },
    (e)=>{
      this.toast.error("Email already exist")
      console.log(e.error)
    })
  }

  resetForm(form? : NgForm){
    if(form!=null){
      form.reset();     
    }
    this.user = {Username :"", Email: "", Password: ""};
    
  }

  googlesignin(){
    this.userService.signInWithGoogle();
  }
}
