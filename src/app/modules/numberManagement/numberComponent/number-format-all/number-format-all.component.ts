import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-format-all',
  templateUrl: './number-format-all.component.html',
  styleUrls: ['./number-format-all.component.scss']
})
export class NumberFormatAllComponent implements OnInit {
  permission:any=[true,true,true];
  data:any={};
  headerList:any=[];

  constructor(private router:Router,) { }
  ngOnInit(): void {
  }

changePageSortSearch(url:any){

}
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['number/numberFormat']);   
}
else if(data.event=='edit'){
  this.router.navigate(['number/numberFormat'],{ queryParams: { data: JSON.stringify(data.data.productFamilyId)} });
    // console.log(data.data, 'data')
}
else if(data.event == 'delete'){
  // this.allService.deleteProductFamily(data.data.productFamilyId, 0).subscribe((res)=>{
  //   this.sweetAlert.recordDeleted();
  //  this.changePageSortSearch(this.url);
  // })  
} 
}
}
