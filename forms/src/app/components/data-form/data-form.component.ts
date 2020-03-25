import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }
  formulario: FormGroup;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    });
  }
  consultaCep() {
    const cep = this.formulario.get('endereco.cep').value;
    // só faz a busca se o cep estiver preenchido
    if (cep !== '') {
      this.http.get('http://viacep.com.br/ws/' + cep + '/json/')
      .subscribe(dados => {
        this.populaDadosForm(dados);
      });
    }
  }
  populaDadosForm(dados) {
    // patchValue atualiza os dados do formulario
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      }
    });
  }
  submit() {
    this.http.post('https://httpbin.org/post',
    JSON.stringify(this.formulario.value))
    .subscribe(dados => {
      console.log(dados),
      this.resetar();
    });
  }
  resetar() {
    this.formulario.reset();
  }
  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  aplicaCssErro(campo) {
    return{
      'is-invalid': this.verificaValidTouched(campo),
    };
  }
}
