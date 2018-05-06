import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';

import { BugStorageService } from './bugStorage.service';
import { BugServerService } from './bugServer.service';
import { Observable } from 'rxjs/Observable';

// Synchronous
/*@Injectable()
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
}*/

@Injectable()
export class BugOperationsService{
	constructor(private bugServer : BugServerService){

	}
	getAll() : Observable<any>{
		return this.bugServer.getAll();
	}
	createNew(bugName : string) : Observable<Bug>{
		let newBug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugServer.save(newBug);
	}
	toggle(bugToToggle : Bug) : Observable<Bug>{
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugServer.save(toggledBug);
	}
	remove(bug : Bug) : Observable<any>{
		return this.bugServer.remove(bug);
	}
}