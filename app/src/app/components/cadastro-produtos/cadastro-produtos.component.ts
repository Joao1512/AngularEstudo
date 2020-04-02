import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
  providers: [ProductsService],
})
export class CadastroProdutosComponent implements OnInit {
  nome = '';
  preco = '';
  descricao = ''; 
  constructor(private servico: ProductsService) { }

  ngOnInit(): void {
  }
  
  create(){
    const product = {
      name: this.nome,
      price: this.preco,
      description: this.descricao
    }

    this.servico.createNewProduct(product);
  }


}
