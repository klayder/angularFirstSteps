import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carName  =  "";
  carYear  =  "";
  @Output("onAddCar") carEmmiter =	new EventEmitter();

  addCar(){
      this.carEmmiter.emit({
      	name	:	this.carName,
      	year	:	this.carYear	
      });
      this.carName  =  "";
      this.carYear  =  "";
      
    }
  }

}
