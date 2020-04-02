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
              private router: Router,
              ) { 
  }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.curso = this.cursosService.getCursoById(this.id);
        if (this.curso == null){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    );
  }
}