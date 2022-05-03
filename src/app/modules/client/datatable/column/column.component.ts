import { Component, Input, OnInit } from '@angular/core';
import { DatatableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent  {

  @Input() value:any;
	@Input() header:any;
	@Input() type:any;
	@Input() width:any;
	@Input() cssClass:any;
	@Input() search:any;
	constructor(table: DatatableComponent) {
		
				 table.addColumn(this)
				 
		}

}
