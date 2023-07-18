import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesComponent } from './references.component';



@NgModule({
  declarations: [
    ReferencesComponent
  ],
  exports: [
    ReferencesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ReferencesModule { }
