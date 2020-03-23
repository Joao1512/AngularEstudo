import { DataFormComponent } from './components/data-form/data-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'templateForm', loadChildren: () => import('./components/template-form/template-form.module').then(m => m.TemplateFormModule) },
  { path: 'dataForm', loadChildren: () => import('./components/data-form/data-form.module').then(m => m.DataFormModule) },
  { path: '', component: DataFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
