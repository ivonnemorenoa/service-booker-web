import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
   component:AboutPageComponent,
  }
]

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  exports: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    
    }),

  ]
})
export class AboutPageModule { }
