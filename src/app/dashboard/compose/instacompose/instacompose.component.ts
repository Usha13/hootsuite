import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instacompose',
  templateUrl: './instacompose.component.html',
  styleUrls: ['./instacompose.component.css']
})
export class InstacomposeComponent implements OnInit {
  files = [];
  accountselected;
  caption : string;
  imageSrc;

  constructor() { }

  ngOnInit(): void {
  }

  
  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // this.readFile(this.files[this.files.length-1]).then((fileContents) => {
      //   console.log(fileContents);
      // })
      reader.readAsDataURL(file)  
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;      
        console.log(this.imageSrc)
      };
   
    }
    
  }

  // onSelect(event) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  //   console.log(this.files)

  //   this.readFile(this.files[this.files.length-1]).then((fileContents) => {
  //     // Put this string in a request body to upload it to an API.
  //     console.log(fileContents);
  //   })
  // }


  // onRemove(event) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }
  
  onInstaPost(form){
   console.log(this.caption)
   console.log(this.imageSrc)
   console.log(this.accountselected)
  }

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = e => {
        return resolve((e.target as FileReader).result);
      };
  
      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };
  
      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }
  
      reader.readAsDataURL(file);
    });
  }
}
