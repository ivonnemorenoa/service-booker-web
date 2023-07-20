import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlCheckboxComponent } from './form-control-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormControlCheckboxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    FormControlCheckboxComponent
  ]
})
export class FormControlCheckboxModule { }
