import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  valor: number = 1;
  @Output() mudouValor = new EventEmitter();

  incrementa(){
    this.valor = this.valor + 1;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementa(){
    this.valor = this.valor - 1;
    this.mudouValor.emit({novoValor: this.valor});
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
