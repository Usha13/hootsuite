import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/shared/models/user.model';
import { FacebookService } from 'src/app/shared/services/facebook.service';
import { UserService } from 'src/app/shared/services/user.service';
import { InstaloginComponent } from './instalogin/instalogin.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
 
  constructor(public dialog: MatDialog, private fbService: FacebookService) {}

  openDialog() {
    this.dialog.open(InstaloginComponent);
  }

    
  ngOnInit(): void {
   
  }

  openfacebook(){
    this.fbService.addFacebook()
  }


}
