import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from '../alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component'


@NgModule({
  declarations: [AlunosFormComponent],
  imports: [
    CommonModule
  ]
})
export class AlunosModule { }
