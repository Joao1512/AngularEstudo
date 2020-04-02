import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AlunosComponent} from './alunos.component';
import {AlunosDetalheComponent} from './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const alunosRoutes = [
    {path: '', component: AlunosComponent,
    children: [
      {path: ':id/editar', component: AlunosFormComponent},
      {path: 'novo', component: AlunosFormComponent},
      {path: ':id', component: AlunosDetalheComponent},
  ]
    },
  ];
@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModule{}
