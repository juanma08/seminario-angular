import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
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
      name: "Jalopa",
      price: 2500,
      img: "assets/img/producto.jpg",
      ofert: false,
      stock: 0
    },
    {
      name: "Yerba",
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
