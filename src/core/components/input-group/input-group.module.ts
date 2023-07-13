import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGroupComponent } from './input-group.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputGroupComponent
  ],
  exports: [
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class InputGroupModule { }
