import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InstagramService } from 'src/app/shared/services/instagram.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  data;
  constructor(private instaService : InstagramService, private toast : ToastrService) { }
  
  ngOnInit(): void {
     this.instaService.getdata().subscribe((res:any)=>{
        this.data = res.data;
        console.log(this.data)
    },
    (err) =>{
      console.log(err)
      this.toast.error(err)
    })
    
  }

}
