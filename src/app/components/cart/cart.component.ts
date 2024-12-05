import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {CartItem} from "../../models/cart.model";
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  cart: CartItem[] = [];
  @Input() update: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.update){
        this.loadCart();
      }
  }

  sumTotal() {
    return this.cart.reduce((acc, item) => acc + item.product.price! * item.quantity!, 0).toFixed(2);
  }

  loadCart(){
    this.productService.getCart().subscribe((response: CartItem[]) => {
      this.cart = response;
      this.productService.cart = response;
    });
  }

  deleteCartItem(cart: CartItem) {
    this.productService.deleteFromCart(cart.product.id!).subscribe(()=> {
      this.loadCart();
    });
  }

}
