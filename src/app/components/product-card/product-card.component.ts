import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product = {};

  constructor(private protectedService: ProductService) {
  }

  toggleFav(product: Product) {
    if(product.favorite) {
      this.protectedService.removeFromFavorites(product);
    } else {
      this.protectedService.addToFavorites(product);
    }
  }

  getPrice(product: Product) {
    return product?.price! * product?.discount! / 100;
  }

  addToCart(product: Product) {
    this.protectedService.addToCart(product);
  }

  setFavourite(product: Product) {
    this.protectedService.addToFavorites(product);
  }
}
