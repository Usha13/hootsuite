import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FacebookService } from 'src/app/shared/services/facebook.service';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  data;
  constructor(private fbService : FacebookService, private toast : ToastrService) { }
  
  ngOnInit(): void {
    this.fbService.getdata().subscribe((res:any)=>{
        this.data = res.data;
        console.log(this.data)
    },
    (err) =>{
      console.log(err)
      this.toast.error(err)
    })
  }

}
