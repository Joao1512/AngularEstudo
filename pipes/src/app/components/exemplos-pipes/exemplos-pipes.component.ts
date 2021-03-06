import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  constructor() { }
  livro: any = [
    {"titulo": 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    "rating": 4.54321,
    "numeroPaginas": 314,
    "preco": 44.99,
    dataLancamento: new Date(2016, 5, 23),
    "url": 'http://a.co/glqjpRP'
  },
  ];
  birthday = new Date(1988,3, 15)

  livros: string[] = ['Java', 'Angular 2'];
  ngOnInit(): void {
  }

}
