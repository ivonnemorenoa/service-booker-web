import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapLocationComponent } from './map-location.component';



@NgModule({
  declarations: [
    MapLocationComponent
  ],
  exports: [
    MapLocationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapLocationModule { }
