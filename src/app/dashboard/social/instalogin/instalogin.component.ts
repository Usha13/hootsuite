import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InstagramService } from 'src/app/shared/services/instagram.service';

@Component({
  selector: 'app-instalogin',
  templateUrl: './instalogin.component.html',
  styleUrls: ['./instalogin.component.css']
})
export class InstaloginComponent implements OnInit {
  user : {username, password};
  constructor(private instaService : InstagramService , private toast : ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.user = {username :"", password: ""};
  }

  onLogin(loginform: NgForm){
    this.instaService.loginUser(this.user);
  }

}
