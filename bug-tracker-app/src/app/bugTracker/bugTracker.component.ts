import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	list : Bug[] = [];
	

	bugSortBy : string = 'name';
	bugSortDescendingOrder : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.list = this.bugOperations.getAll();
	}

	onNewBugCreated(newBug){
		this.list = [...this.list, newBug];
	}

	onBugNameClick(bugToToggle){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.list = this.list.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.list = this.list.filter(bug => !bug.isClosed);
	}
}










