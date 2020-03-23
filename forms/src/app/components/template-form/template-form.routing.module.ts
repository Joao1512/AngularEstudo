import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form.component';

const templateFormRoutes: Routes = [
    {path: '', component: TemplateFormComponent,
    children: [],
    },
  ];
@NgModule({
    imports: [RouterModule.forChild(templateFormRoutes)],
    exports: [RouterModule],
})
export class TemplateFormRoutingModule {}
