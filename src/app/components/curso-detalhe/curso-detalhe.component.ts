import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: any;
  curso: any;
  inscricao: any;
  constructor(private route: ActivatedRoute,
              private cursosService: CursosService,
              private router: ActivatedRoute,
              ) {
  }
  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.id = this.router.snapshot.params['id'];
    this.cursosService.getCursoById(this.id).subscribe(dados => this.curso = dados);
  }
}
