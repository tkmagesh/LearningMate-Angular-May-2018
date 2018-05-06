import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { BugServerService } from './services/bugServer.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
//Synchronous (using localStorage version of bugOperations)
/*export class BugTrackerComponent implements OnInit{
	list : Bug[] = [];
	

	bugSortBy : string = 'name';
	bugSortDescendingOrder : boolean = false;

	constructor(private bugOperations : BugOperationsService, private bugServer : BugServerService){
		this.bugServer.getAll();
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
}*/

export class BugTrackerComponent implements OnInit{
	list : Bug[] = [];
	

	bugSortBy : string = 'name';
	bugSortDescendingOrder : boolean = false;

	constructor(private bugOperations : BugOperationsService, private bugServer : BugServerService){
		this.bugServer.getAll();
	}

	ngOnInit(){
		this.bugOperations
			.getAll()
			.subscribe(bugs => this.list = bugs);
	}

	onNewBugCreated(newBug){
		this.list = [...this.list, newBug];
	}

	onBugNameClick(bugToToggle){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.list = this.list.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.list
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations
									.remove(closedBug)
									.subscribe(() => this.list = this.list.filter(bug => bug.id !== closedBug.id)));
	}
}









