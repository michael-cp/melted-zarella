import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct, ISizeNPrice } from '../product/index';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  products: IProduct[];
  prices: ISizeNPrice[];
  mainUrl: string = environment.mainUrl;
  pizzaType: number = 1;
  statusCode: number;
  pageTitle: string = 'Pizza';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductListByType(this.pizzaType);
    this.getSizeNPriceList();
  }

  getProductListByType(id: number) {
    this.productService.getProductListByType(id)
      .subscribe(
      data => this.products = data,
      errorCode => this.statusCode = errorCode);
  }

  getSizeNPriceList(){
        this.productService.getSizeNPriceList()
      .subscribe(
      data => this.prices = data,
      errorCode => this.statusCode = errorCode);
  }


}
