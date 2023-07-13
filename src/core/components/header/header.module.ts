import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   component:HeaderComponent,
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ]
})
export class HeaderModule { }
