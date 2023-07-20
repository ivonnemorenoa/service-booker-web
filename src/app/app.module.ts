import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from 'src/core/components/header/header.module';
import { FooterModule } from 'src/core/components/footer/footer.module';
import { FormControlCheckboxModule } from 'src/core/components/form-control-checkbox';
import { FormControlSelectModule } from 'src/core/components/form-control-select/form-control-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FormControlCheckboxModule,
    FormControlSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
