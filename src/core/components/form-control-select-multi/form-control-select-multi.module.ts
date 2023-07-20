import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlSelectMultiComponent } from './form-control-select-multi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlCheckboxModule } from '../form-control-checkbox';



@NgModule({
  declarations: [FormControlSelectMultiComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlCheckboxModule,
  ],
  exports: [
    FormControlSelectMultiComponent
  ]
})
export class FormControlSelectMultiModule { }

