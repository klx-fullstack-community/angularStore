import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

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
    this.itemList = this.productService.getProducts();
  }

  show(item: string) {
    this.selectedMenu = item;
  }

  toggleCart() {
    this.showCart = !this.showCart;
  }
}
