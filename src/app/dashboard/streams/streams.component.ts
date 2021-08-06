import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  constructor(private router : Router) { }

  ontabchange(){
    console.log("click")
     this.router.navigate(['instagram'])
  }

  ngOnInit(): void {
  }

}
