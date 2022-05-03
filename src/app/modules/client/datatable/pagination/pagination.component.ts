import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input () pageCount:number=0;
  @Input () currentPage:number=1;
  @Input () frist:boolean=true;
  @Input () last:boolean=true;
  @Output() chnagePageNo= new EventEmitter<any>();
  pageList:any=[];
  ngOnChanges(changes:SimpleChanges): void {
    
    let pageListTemp=[];
for(let i=0;i<this.pageCount;i++){
  pageListTemp.push(i+1);
}
this.pageList=pageListTemp;
this.currentPage=this.currentPage;

}

chnagePage(x:number){
this.chnagePageNo.emit(x);
}
  constructor() { }

  ngOnInit(): void {
  }


}
