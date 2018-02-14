import { Component, OnInit } from '@angular/core';
import { StocksTestService } from '../stocks-test.service';
import { securitiesStock } from  '../securitiesStock';

@Component({
  selector: 'app-display-stocks',
  templateUrl: './display-stocks.component.html',
  styleUrls: ['./display-stocks.component.css']
})
export class DisplayStocksComponent implements OnInit {

  constructor(private displayStocks: StocksTestService) { }
   
  mockSecutrities: securitiesStock[];
 	  
   getStocks_api(): void {
	 this.displayStocks.getStocksFrpmAPI().subscribe(stocks => {
		 this.mockSecutrities = stocks['securities']; 
	  }); 
	
  }
  
  getStocks(): void {
	  this.mockSecutrities = this.displayStocks.getStocks();
  }
  
  ngOnInit() {
	 this.getStocks_api();
  }

}
