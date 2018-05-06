import { Component } from '@angular/core';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	list = [];

	onCreateNewClick(bugName : string){
		let newBug = {
			name : bugName,
			isClosed : false
		};
		this.list.push(newBug);
	}

	onBugNameClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveClosedClick(){
		this.list = this.list.filter(bug => !bug.isClosed);
	}
}