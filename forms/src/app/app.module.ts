import { DataFormModule } from './components/data-form/data-form.module';
import { TemplateFormModule } from './components/template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TemplateFormModule,
    DataFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
