import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlunosComponent} from './alunos.component'
import {AlunosDetalheComponent} from './alunos-detalhe/alunos-detalhe.component';
import {AlunosRoutingModule } from './alunos.routing.module';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosDetalheComponent,
    AlunosFormComponent
  ],
  imports: [
    AlunosRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class AlunosModule { }
