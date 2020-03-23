import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuarios: any = [
    {nome: '', email: ''}
  ]
  nome: string;
  email: string;

  onSubmit(form) {
    console.log(this.usuarios)
    console.log(form.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
