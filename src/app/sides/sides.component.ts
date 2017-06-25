import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct, ISizeNPrice } from '../product/index';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {

  products: IProduct[];
  prices: ISizeNPrice[];
  mainUrl: string = environment.mainUrl;
  sidesType: number = 3;
  statusCode: number;
  pageTitle: string = 'Sides';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductListByType(this.sidesType);
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
