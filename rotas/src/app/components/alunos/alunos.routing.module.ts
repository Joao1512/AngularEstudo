import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {AlunosComponent} from  './alunos.component';
import {AlunosDetalheComponent} from  './alunos-detalhe/alunos-detalhe.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent},
    {path: 'alunos/:id', component: AlunosDetalheComponent},
    {path: 'alunos/:id/editar', component: AlunosFormComponent},
    {path: 'alunos/novo', component: AlunosFormComponent},
]
@NgModule({
    imports:[RouterModule.forChild(alunosRoutes)],
    exports:[RouterModule]
})
export class AlunosRoutingModule {}