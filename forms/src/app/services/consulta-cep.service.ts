import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  getCep(cep) {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`);
  }
}
