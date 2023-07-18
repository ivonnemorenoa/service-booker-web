import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ServicesModule } from 'src/core/components/services/services.module';
import { BrandsModule } from 'src/core/components/brands/brands.module';


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
    BrandsModule, 
    RouterModule.forChild( routes )
  ]
})

export class HomePageModule { }
