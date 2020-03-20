import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../../../services/alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  aluno: any;
  inscricao: any;
  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    ) { }
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
        if (this.aluno === null){
          this.aluno = [];
        }
      }
    );
  }
}
