import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';



@NgModule({
  declarations: [
    SlideComponent
  ],
  exports: [
    SlideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SlideModule { }
