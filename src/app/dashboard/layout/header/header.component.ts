import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { SidenavService } from '../sidenav/sidenav.service';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { User } from 'src/app/shared/models/user.model';
import { FacebookService } from 'src/app/shared/services/facebook.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService : UserService,
    private fbService: FacebookService,
    private sidenavService :SidenavService, 
    private userservice : UserService, 
    public auth : SocialAuthService) { }

  ngOnInit(): void {
   
  }

  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

  logout(){
      this.userservice.logoutUser()
  }

  remove(){
    this.fbService.removeAccount()
  }

}
