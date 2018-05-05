import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{

	model : CalculatorModel;

	constructor(){
		this.model = new CalculatorModel();
	}

}