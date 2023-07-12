import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
   component: ContactPageComponent,
  }
]

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  exports: [
    ContactPageComponent
  ],
  imports: [
    RouterModule.forChild( routes ),
  ]
})
export class ContactPageModule { }
