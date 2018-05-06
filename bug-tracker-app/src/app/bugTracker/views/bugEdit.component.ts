import { Component, Output, EventEmitter } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service' ;
import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" [(ngModel)]="newBugName"  >
			<input type="button" value="Create New" (click)="onCreateNewClick()">
		</section>
	`
})
export class BugEditComponent{
	newBugName : string = '';

	@Output()
	bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onCreateNewClick(){
		let newBug : Bug = this.bugOperations.createNew(this.newBugName);
		this.newBugName = '';
		this.bugCreated.emit(newBug);
	}
}


