import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands.component';



@NgModule({
  declarations: [
    BrandsComponent,
  ],
  exports: [
    BrandsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class BrandsModule { }
