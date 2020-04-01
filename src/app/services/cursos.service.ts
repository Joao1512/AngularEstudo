import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(
   private http: HttpClient
  ) {}

  getCursoById(id: number) {
    return this.http.get(`http://localhost:3000/cursos/${id}`);
  }
  getCursos() {
    return this.http.get('http://localhost:3000/cursos');
  }
  postCurso(curso) {
    return this.http.post('http://localhost:3000/cursos', curso).pipe(take(1));
  }
  deleteCurso(id: number) {
    return this.http.delete(`http://localhost:3000/cursos/${id}`);
  }
}
