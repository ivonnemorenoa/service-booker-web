import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageComponent } from './request-page.component';



@NgModule({
  declarations: [
    RequestPageComponent
  ],
  exports: [
    RequestPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RequestPageModule { }
