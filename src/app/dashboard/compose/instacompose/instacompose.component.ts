import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instacompose',
  templateUrl: './instacompose.component.html',
  styleUrls: ['./instacompose.component.css']
})
export class InstacomposeComponent implements OnInit {
  files = [];
  filecontents;
  caption : string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log(this.files)
    this.readFile(event.addedFiles).then((fileContents) => {
      // Put this string in a request body to upload it to an API.
      console.log(fileContents);
    })
  }


  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  onInstaPost(form){
   console.log(this.caption)
   console.log(this.files)
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
