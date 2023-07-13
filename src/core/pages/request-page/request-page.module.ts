import { NgModule } from '@angular/core';
import { RequestPageComponent } from './request-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   component:RequestPageComponent,
  }
]

@NgModule({
  declarations: [
    RequestPageComponent
  ],
  exports: [
    RequestPageComponent
  ],
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class RequestPageModule { }
