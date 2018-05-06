import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	list : Bug[] = [];
	newBugName : string = '';

	bugSortBy : string = 'name';
	bugSortDescendingOrder : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		
	}

	ngOnInit(){
		this.list = this.bugOperations.getAll();
	}

	onCreateNewClick(){
		let newBug : Bug = this.bugOperations.createNew(this.newBugName);
		this.list = [...this.list, newBug];
		this.newBugName = '';
	}

	onBugNameClick(bugToToggle){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.list = this.list.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.list = this.list.filter(bug => !bug.isClosed);
	}
}










