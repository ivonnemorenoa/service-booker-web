import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo : './home-page', pathMatch : 'full' },
  {
    path: 'home-page',
    loadChildren: () => import('./../core/pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'request-page',
    loadChildren: () => import('./../core/pages/request-page/request-page.module').then(m => m.RequestPageModule)
  },
  {
    path: 'contact-page',
    loadChildren: () => import('./../core/pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'about-page',
    loadChildren: () => import('./../core/pages/about-page/about-page.module').then(m => m.AboutPageModule)
  },
  {
    path: 'Header',
    loadChildren: () => import('./../core/components/header/header.module').then(m => m.HeaderModule)
  },
  {
    path: '**',
    redirectTo: 'home-page'
  }

];

@NgModule({
  declarations: [
  ],
  imports:
    [
      RouterModule.forRoot(routes),

    ],
  exports:
    [
      RouterModule,
    
    ]
})
export class AppRoutingModule { }