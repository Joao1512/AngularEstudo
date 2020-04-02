import { TemplateFormRoutingModule } from './template-form.routing.module';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [
    TemplateFormRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class TemplateFormModule { }
