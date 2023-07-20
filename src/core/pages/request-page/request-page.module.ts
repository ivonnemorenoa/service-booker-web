import { NgModule } from '@angular/core';
import { RequestPageComponent } from './request-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'src/core/components/input-group/input-group.module';
import { FormGroupModule } from 'src/core/components/form-group/form-group.module';
import { FormControlSelectModule } from 'src/core/components/form-control-select/form-control-select.module';
import { FormControlSelectMultiModule } from 'src/core/components/form-control-select-multi/form-control-select-multi.module';

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
    ReactiveFormsModule,
    InputGroupModule,
    FormGroupModule,
    FormControlSelectModule,
    FormControlSelectMultiModule,
    RouterModule.forChild( routes )
  ]
})
export class RequestPageModule { }
