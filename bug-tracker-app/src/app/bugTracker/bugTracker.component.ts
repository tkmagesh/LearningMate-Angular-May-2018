import { Component } from '@angular/core';
import { Bug } from './models/Bug';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	list : Bug[] = [];
	newBugName : string = '';

	constructor(){
		
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

	getFormattedBugName(bugName : string){
		console.log('getFormattedBugName triggered');
		return bugName.length < 30 ? bugName : bugName.substr(0,30) + '...';
	}	
}










