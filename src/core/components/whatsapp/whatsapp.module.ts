import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from './whatsapp.component';



@NgModule({
  declarations: [
    WhatsappComponent
  ],
  exports: [
    WhatsappComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WhatsappModule { }
