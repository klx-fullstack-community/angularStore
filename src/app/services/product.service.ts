import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../models/product.model";
import {CartItem} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) {
  }

  cart: CartItem[] = [];
  productList: Product[] = [];

  getCart() {
    return this.http.get<CartItem[]>(this.baseUrl + 'cart-items');
  }

  addToFavorites(product: Product) {
   this.productList.find(p => p.id === product.id)!.favorite = true;
  }
  removeFromFavorites(product: Product) {
   this.productList.find(p => p.id === product.id)!.favorite = false;
  }

  addToCart(product: Product) {
    return this.http.post(this.baseUrl + 'cart-items', product)
  }

  deleteFromCart(productId: number) {
    return this.http.delete(this.baseUrl + 'cart-items/' + productId)
  }

  getProducts() {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }
}
