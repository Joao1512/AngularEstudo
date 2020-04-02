import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  getCursos(){
    return [
      {id: 1, nome: 'Angular 2', description: 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.'},
      {id: 2, nome:  'Java', description: 'Java é o nome dado ao ambiente computacional, ou plataforma, criada pela empresa estadunidense Sun Microsystems, e vendida para a Oracle depois de alguns anos.'},
    ]
  }
  getCursoById(id: number){
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      }
    }
    return null;
  }
  constructor() {}
}