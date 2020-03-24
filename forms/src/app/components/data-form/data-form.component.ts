import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
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
