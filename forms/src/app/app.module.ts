import { ConsultaCepService } from './services/consulta-cep.service';
import { DropdownService } from './services/dropdown.service';
import { DataFormModule } from './components/data-form/data-form.module';
import { TemplateFormModule } from './components/template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule
  ],
  providers: [DropdownService,
              ConsultaCepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
