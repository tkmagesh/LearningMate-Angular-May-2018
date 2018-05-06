import { Component } from '@angular/core';
import { Bug } from './models/Bug';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	list : Bug[] = [];
	newBugName : string = '';

	bugSortBy : string = 'name';
	bugSortDescendingOrder : boolean = false;
	
	constructor(){
		this.list.push({name : 'Server communication failure', isClosed : false});
		this.list.push({name : 'Data integrity checks failed', isClosed : true});
		this.list.push({name : 'User actions not recognized', isClosed : true});
		this.list.push({name : 'Application not responding', isClosed : false});
	}
	onCreateNewClick(){
		let newBug : Bug = {
			name : this.newBugName,
			isClosed : false
		};
		this.list.push(newBug);
		this.newBugName = '';
	}

	onBugNameClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.list.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}

	
}










