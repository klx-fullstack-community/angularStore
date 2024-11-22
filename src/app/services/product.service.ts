import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/product.model";
import {CartItem} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  productList: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product1.jpg',
      discount: 10,
      favorite: false
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product2.jpg',
      discount: 10,
      favorite: false
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product3.jpg',
      discount: 0,
      favorite: false
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product1.jpg',
      discount: 10,
      favorite: false
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product2.jpg',
      discount: 0,
      favorite: false
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product3.jpg',
      discount: 0,
      favorite: false
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product3.jpg',
      discount: 10,
      favorite: false
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product2.jpg',
      discount: 0,
      favorite: false
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product1.jpg',
      discount: 0,
      favorite: false
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description 1',
      price: 100,
      imageUrl: 'assets/product1.jpg',
      discount: 10,
      favorite: false
    },
  ];

  cart: CartItem[] = [];

  getProducts() {
    return this.productList;
  }

  getCart() {
    return this.cart;
  }

  addToFavorites(product: Product) {
    this.productList.find(p => p.id === product.id)!.favorite = true;
  }
  removeFromFavorites(product: Product) {
    this.productList.find(p => p.id === product.id)!.favorite = false;
  }

  addToCart(product: Product) {
    if (this.cart.find(p => p.product.id === product.id)) {
      this.cart.find(p => p.product.id === product.id)!.quantity++;
    } else {
      this.cart.push({product: product, quantity: 1});
    }
  }
}
