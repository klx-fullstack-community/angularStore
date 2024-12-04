import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  menuList = [
    {
      title: '20% Off',
      link: '20off'
    },
    {
      title: 'Gifts',
      link: 'gifts'
    },
    {
      title: 'New in',
      link: 'new'
    },
    {
      title: 'Brands',
      link: 'brands'
    },
    {
      title: 'Shoes',
      link: 'shoes'
    }
  ];
  selectedMenu = 'home';
  showCart = false;

  itemList: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.productService.productList = response;
      this.itemList = this.productService.productList;
      this.itemList = this.itemList.map(item => ({ ...item, imageBase64: 'data:image/png;base64, ' + item.imageBase64}));
    });
  }

  show(item: string) {
    this.selectedMenu = item;
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }

  addToCart(product: Product) {
    const productToAdd = {...product};
    productToAdd.imageBase64 = product.imageBase64?.split(', ')[1];
    this.productService.addToCart(productToAdd).subscribe();
  }
  updateProduct(event: Product) {
    this.itemList.find(p => p.id === event.id)!.favorite = event.favorite!;
  }
}
