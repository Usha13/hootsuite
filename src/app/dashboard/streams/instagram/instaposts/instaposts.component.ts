import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InstagramService } from 'src/app/shared/services/instagram.service';
import { filter, map } from 'rxjs/operators'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-instaposts',
  templateUrl: './instaposts.component.html',
  styleUrls: ['./instaposts.component.css']
})
export class InstapostsComponent implements OnInit {
  id:number;
  instaaccount;
  constructor(
    private route : ActivatedRoute, 
    private instaService: InstagramService,
    private toast : ToastrService
    ) { }

  ngOnInit(): void {

    // this.id = this.route.snapshot.params['id']
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id']
      this.instaService.getdata().subscribe((res:any)=>{
          this.instaaccount = res.data[this.id];
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
