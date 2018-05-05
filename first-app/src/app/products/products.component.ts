import { Component } from '@angular/core';

@Component({
	selector : 'app-products',
	template : `
		<h3>Products</h3>
		<hr/>
		<label>Product Name :</label>
		<input type="text" #txtProductName />
		<input type="button" value="Add New" (click)="list.push(txtProductName.value)" />
		<ol>
			<li *ngFor="let product of list">{{product}}</li>
		</ol>

	`
})
export class ProductsComponent{
	list = [ 'Pen', 'Pencil', 'Marker'];
}