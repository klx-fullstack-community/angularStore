import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product = {};
  @Output() addCart: EventEmitter<Product> = new EventEmitter<Product>;
  @Output() addFav: EventEmitter<Product> = new EventEmitter<Product>;
  

  constructor(private protectedService: ProductService) {
  }

  toggleFav(product: Product) {
    product.favorite = !product.favorite;
    if(product.favorite) {
      this.addFav.emit(product);
    } else {
      this.addFav.emit(product);
    }
  }

  getPrice(product: Product) {
    return product?.price! * product?.discount! / 100;
  }

  addToCart(product: Product) {
    this.addCart.emit(product);
  }
}
