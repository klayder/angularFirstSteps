import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {
	  
  cars   =  [{
    name  :  "Ford",
    year  :  2015
  },{
    name  :  "Mazda",
    year  :  2010
  },{
    name  :  "Audi",
    year  :  2017
  }];

  updateCarList(car){
    this.cars.push(car);
  }
  
}
