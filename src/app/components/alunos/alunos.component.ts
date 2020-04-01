import { Component, OnInit } from '@angular/core';
import {AlunosService} from '../../services/alunos.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos = [];
  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
   }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();

    if (this.alunos === null) {
      this.alunos = [];
    }
  }
}
