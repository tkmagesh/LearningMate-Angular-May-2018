import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bug } from '../models/Bug';

@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private httpClient : HttpClient){

	}
	getAll() : Observable<any>{
		return this.httpClient
			.get(this.baseUrl);
			
	}
	save(bug) : Observable<any>{
		if (bug.id === 0){
			return this.httpClient.post(this.baseUrl, bug);
		} else {
			return this.httpClient.put(`${this.baseUrl}/${bug.id}`, bug)
		}
	}
	remove(bug) : Observable<any>{
		return this.httpClient.delete(`${this.baseUrl}/${bug.id}`, bug);
	}
}

