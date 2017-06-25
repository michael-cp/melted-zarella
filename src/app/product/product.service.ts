import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ISizeNPrice } from './sizenprice';
import { IProduct } from './product';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


const _apiUrl = environment.apiUrl;

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  getProductListByType(productTypeId: number): Observable<IProduct[]> {
    return this._http.get(_apiUrl + '/products/type/' + productTypeId)
      .map((response: Response) => <IProduct[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getSizeNPriceList(): Observable<ISizeNPrice[]> {
    return this._http.get(_apiUrl + '/sizenprices')
      .map((response: Response) => <ISizeNPrice[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
