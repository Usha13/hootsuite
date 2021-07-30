import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './layout/sidenav/sidenav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav : MatSidenav;
  constructor(private sidenavService:SidenavService) {
    
   }

  ngOnInit(): void {
    console.log(this.sidenav)
    this.sidenavService
    .setSidenav(this.sidenav);
  }
  

}
