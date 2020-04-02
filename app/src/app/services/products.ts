import {Injectable} from '@angular/core';

@Injectable()
export class ProductsService {
    getProducts(){
       const products = localStorage.getItem('products');
       [
            {
              name: 'Phone XL',
              price: 799,
              description: 'A large phone with one of the best screens'
            },
            {
              name: 'Phone Mini',
              price: 699,
              description: 'A great phone with one of the best cameras'
            },
            {
              name: 'Phone Standard',
              price: 299,
              description: ''
            }
          ];
        return products;
    }

    createNewProduct(produto:any) {
        const productsList:any = localStorage.getItem('products');
        productsList.put(produto);
        localStorage.setItem('products', productsList);
    
    }
    works(){
      const v = 'Works';
      return v;
    }
}