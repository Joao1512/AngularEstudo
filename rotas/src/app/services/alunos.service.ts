import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  getAlunos(){
    return [
      {id: 1, nome: 'Joao', email: 'joao@hotmail.com'},
      {id: 2, nome: 'Angelo', email: 'angelo@hotmail.com'},
      {id: 3, nome: 'Leo', email: 'leo@hotmail.com'},

    ]
  }
  getAluno(id: number){
    let alunos = this.getAlunos();
    for(let i = 0; i < alunos.length; i++){
      let aluno = alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }
  constructor() { }
}
