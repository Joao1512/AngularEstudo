import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService],
})
export class ProductListComponent implements OnInit {

  products;
  nome;
  descricao;
  preco;
  constructor(productsService: ProductsService) {
    productsService = new ProductsService();
    this.products = productsService.getProducts();
  }
  ngOnInit(): void {
  }
}
