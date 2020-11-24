import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    {
      name: "coca-cola",
      price: 200,
      img: "assets/img/producto.jpg",
      ofert: true,
      stock: 30
    },
    {
      name: "Pan",
      price: 80,
      img: "assets/img/producto.jpg",
      ofert: false,
      stock: 0
    },
    {
      name: "Fernet",
      price: 500,
      img: "assets/img/producto.jpg",
      ofert: true,
      stock: 30
    }
  ]

  ngOnInit(): void {
  }

}
