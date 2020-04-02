import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }
  getEstadosBr() {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
  getCargos() {
    return [
      {nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      {nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      {nome: 'Dev', nivel: 'Sênior', desc: 'Dev Sr'},
    ];
  }
  getTecnologias() {
    return [
    {nome: 'Java'},
    {nome: 'Python'},
    {nome: 'Ruby'},
    {nome: 'JavaScript'},
    {nome: 'C#'},
    {nome: 'C++'},
    ];
  }
  getNewsLetter() {
    return [
      {valor: 'sim', desc: 's'},
      {valor: 'não', desc: 'n'},
    ];
  }
}

