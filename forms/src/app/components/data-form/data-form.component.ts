import { formValidations } from './form-validations';
import { ConsultaCepService } from './../../services/consulta-cep.service';
import { DropdownService } from './../../services/dropdown.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
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
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
  ) { }
  formulario: FormGroup;
  estados: any;
  cargos: any [];
  tecnologias: any [];
  newsletter: any [];
  public frameworks: any[];
  ngOnInit(): void {
    this.frameworks = ['Angular', 'React', 'Flutter', 'React Native'];
    this.buildFrameworks();
    this.estados = this.dropdownService.getEstadosBr();
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletter = this.dropdownService.getNewsLetter();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      confirmaEmail: [null, [Validators.required, CustomValidators.equalTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null, Validators.required],
      tecnologias: [null],
      newsletter: [null, Validators.required],
      frameworks: this.buildFrameworks(),
      termos: [null, Validators.pattern('true')],
    });
  }
  consultaCep() {
    const cep = this.formulario.get('endereco.cep').value;
    // só faz a busca se o cep estiver preenchido
    if (cep !== '') {
      this.consultaCepService.getCep(cep).subscribe(dados => this.populaDadosForm(dados));
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
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post',
      JSON.stringify(this.formulario.value))
      .subscribe(dados => {
        console.log(dados),
        this.resetar();
      });
    }
    else {
      this.verificaValidacoesForm(this.formulario);
    }
  }
  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup){
        this.verificaValidacoesForm(controle);
      }
    });
  }
  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel && obj2.nivel) :  obj1 === obj2;
  };
  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    console.log(values);
    return this.formBuilder.array(values, formValidations.requiredMinCheckBox(1));
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
