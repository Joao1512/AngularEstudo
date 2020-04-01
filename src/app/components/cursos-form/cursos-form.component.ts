import { CursosService } from './../../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  formulario: FormGroup;
  id = 0;
  M;
  constructor(
    private formBuilder: FormBuilder,
    private cursosService: CursosService,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      descricao: [null],
      id: [this.id]
    });
  }
  verificaValidTouched(campo) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }
  aplicaCssErro(campo) {
    return {
      'invalid': this.verificaValidTouched(campo),
    };
  }
  onSubmit() {
    console.log(this.formulario.value);
    this.id = this.id + 1;
    this.cursosService.postCurso(this.formulario.value).subscribe();
  }
}
