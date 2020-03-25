import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }
  getEstadosBr() {
    return this.http.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
}
