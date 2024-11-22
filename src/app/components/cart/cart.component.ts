import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {CartItem} from "../../models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: CartItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }

  sumTotal() {
    return this.cart.reduce((acc, item) => acc + item.product.price! * item.quantity!, 0);
  }

}
