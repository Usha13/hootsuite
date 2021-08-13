import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacebookService } from 'src/app/shared/services/facebook.service';

@Component({
  selector: 'app-fbposts',
  templateUrl: './fbposts.component.html',
  styleUrls: ['./fbposts.component.css']
})
export class FbpostsComponent implements OnInit {

  id:number;
  fbaccount;
  constructor(
    private route : ActivatedRoute, 
    private fbService: FacebookService,
    private toast : ToastrService
    ) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id']
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id']
      this.fbService.getdata().subscribe((res:any)=>{
          this.fbaccount = res.data[this.id];
        },
        (err) =>{
          this.toast.error(err)
        })
    },
    (err) =>{ 
      this.toast.error(err)
    })


  }

}
