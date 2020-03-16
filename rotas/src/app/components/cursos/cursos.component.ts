import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any [];
  pagina: number;
  
  constructor(private cursosService: CursosService,
             private activatedRoute: ActivatedRoute,
             private router: Router,
             )
             { }
  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.activatedRoute.queryParams.subscribe(
      (queryParams: any) =>{
        this.pagina = queryParams['pagina']; // passa o numero da query para a variaval pagina
      }
    )
  }
  incrementaPagina(){     
    this.router.navigate(['/cursos'],
    {queryParams: {'pagina': ++this.pagina}});
  }
}