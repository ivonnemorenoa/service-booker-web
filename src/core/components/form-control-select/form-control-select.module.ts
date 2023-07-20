import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlSelectComponent } from './form-control-select.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormControlSelectComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormControlSelectComponent
  ]
})
export class FormControlSelectModule { }
 
