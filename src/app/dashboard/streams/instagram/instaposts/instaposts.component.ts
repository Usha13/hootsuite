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


    // const getBase64FromUrl = async (url) => {
    //   const data = await fetch(url);
    //   const blob = await data.blob();
    //   return new Promise((resolve) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(blob); 
    //     reader.onloadend = () => {
    //       const base64data = reader.result;   
    //       resolve(base64data);
    //     }
    //   });
    // }
    
    // getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8').then(console.log)
    

  }

  
}
