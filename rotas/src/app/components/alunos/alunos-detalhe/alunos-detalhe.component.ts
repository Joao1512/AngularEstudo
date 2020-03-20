import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../../../services/alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit {
  inscricao: any;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }
  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
