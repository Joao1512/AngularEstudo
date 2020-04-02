import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './data-form.component';


const dataFormRoutes: Routes = [
    {path: '', component: DataFormComponent,
    children: [],
    },
  ];
@NgModule({
    imports: [RouterModule.forChild(dataFormRoutes)],
    exports: [RouterModule],
})
export class TemplateFormRoutingModule { }
