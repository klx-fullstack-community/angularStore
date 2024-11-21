import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product = {};

  toggleFav(product: Product) {
    product.favorite = !product.favorite;
  }

  getPrice(product: Product) {
    return product?.price! * product?.discount! / 100;
  }
}
