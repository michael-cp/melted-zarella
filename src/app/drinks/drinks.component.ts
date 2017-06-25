import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct, ISizeNPrice } from '../product/index';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  products: IProduct[];
  prices: ISizeNPrice[];
  mainUrl: string = environment.mainUrl;
  drinksType: number = 2;
  statusCode: number;
  pageTitle: string = 'Drinks';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductListByType(this.drinksType);
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
