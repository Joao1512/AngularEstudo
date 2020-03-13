import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products';
@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
  providers: [ProductsService],
})
export class EventBindingComponent implements OnInit {
  values = '';
  tituloEstudo: String = '';
  clickedMessage = "";
  nomeCurso="Angular 2";
  works = '';
  c = 0;
  mouseOver: boolean = false;
  onKey(event: any) {
    this.values = event.target.value;
  }

  onClick(){
    this.c = this.c + 1;
    this.clickedMessage = "clicou " + this.c + " vezes";
  }
  onMouseOver(){
    this.mouseOver = !this.mouseOver;
  }
  onValorMudou(event){
    console.log(event)
  }
  constructor(productsService: ProductsService) { 
    this.works = productsService.works(); 
  }
  onEnter(value: String){
    this.tituloEstudo = value;
  }
  ngOnInit(): void {
  }

}
