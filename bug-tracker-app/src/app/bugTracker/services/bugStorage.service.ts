import { Bug } from '../models/Bug';

export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId = 0;

	getAll() : Bug[]{
		let result = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let rawData = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(rawData);
			result.push(bug);
			this.currentBugId = bug.id > this.currentBugId ? bug.id : this.currentBugId;
		}
		return result;
	}
	save(bug : Bug) : Bug {
		if (bug.id === 0){ //newbug
			let newBug = { ...bug, id : ++this.currentBugId};
			this.storage.setItem(newBug.id.toString(), JSON.stringify(newBug));
			return newBug;
		} else {
			this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
			return bug;
		}
	} 
	remove(bug : Bug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}