import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{
	constructor(private bugStorage : BugStorageService){

	}
	getAll(){
		return this.bugStorage.getAll();
	}
	createNew(bugName : string) : Bug{
		let newBug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugStorage.save(newBug);
	}
	toggle(bugToToggle : Bug) : Bug{
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugStorage.save(toggledBug);
	}
	remove(bug : Bug){
		return this.bugStorage.remove(bug);
	}
}