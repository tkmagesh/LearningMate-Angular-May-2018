import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	//state
	userName : string = 'Magesh';
	greetMessage : string = '';

	onUserNameChange(value){
		this.userName = value;
	}
	onGreetClick(){
		//this.userName = userName;
		this.greetMessage = `Hi ${this.userName}, Have a nice day!`;
	}
}