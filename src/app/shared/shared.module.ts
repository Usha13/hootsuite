import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './modules/app-material.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    CommonModule,
    AppMaterialModule
  ]
})
export class SharedModule { }
