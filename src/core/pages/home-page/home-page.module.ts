import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ServicesModule } from 'src/core/components/services/services.module';


const routes: Routes = [
  {
    path: '',
   component:HomePageComponent,
  }
]


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    ServicesModule,
    RouterModule.forChild( routes )
  ]
})

export class HomePageModule { }
