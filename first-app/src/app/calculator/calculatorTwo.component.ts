import { Component } from '@angular/core';
import { CalculatorModel } from './calculatorModel';

@Component({
	selector : 'app-calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{

	model : CalculatorModel;
	operation : string = '';

	constructor(){
		this.model = new CalculatorModel();
	}

}