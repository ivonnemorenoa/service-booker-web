import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputGroupModule } from 'src/core/components/input-group/input-group.module';

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
    CommonModule,
    RouterModule.forChild( routes ),
    ReactiveFormsModule,
    InputGroupModule,    
  ]
})
export class ContactPageModule { }
