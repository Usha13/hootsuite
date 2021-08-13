import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  user : User;
  constructor(private userService : UserService, public authService: SocialAuthService) { 
  }
    
  ngOnInit(): void {
    this.userService.getprofile()
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
  }

}
