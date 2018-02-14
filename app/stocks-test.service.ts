import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { stocks } from './mockup-stocks';
import { securitiesStock } from './securitiesStock';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StocksTestService {

  constructor(private _http: HttpClient) { }
   
 // result:any;
  
 
	
  getStocks (): securitiesStock[] { //this function use when get the data only from the mockup and not from http

	return stocks;
  }
  
  getStocksFrpmAPI(): Observable<securitiesStock[]> {
	  return this._http.get<securitiesStock[]>("https://rest.prfteci.com/api/angulartest/")
  }

}
