import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(data : string, trimLength : number = 30) : string{
		console.log('TrimTextPipe.transform triggered');
		return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
	}
}