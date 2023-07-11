import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  exports: [
    ContactPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactPageModule { }
