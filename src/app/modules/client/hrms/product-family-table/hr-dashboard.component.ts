import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../../services/allservices.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss']
})
export class HrDashboardComponent implements OnInit {
  permission:any=[true,true,true];
  headerList:any=[];
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  constructor(private allService:AllservicesService, private router:Router) { }
  data:any={};
  ngOnInit(): void {
    this.allService.getFamilylist("pageNo=1&pageSize=5").subscribe(sucess=>{
    this.headerList=sucess.headerlist  ; //sucess.headerList;

    this.data=sucess.page;
    },
    error=>{

    }
    );


}
changePageSortSearch(url:any){
  this.ajayStri =""+ url.toString();
  var splittedpaging = this.ajayStri.split('&',4);
  this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
  this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
  this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
  this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);

  // alert(url + 'ertyuiop');
  this.allService.getFamilylist(url).subscribe(sucess=>{
    this.data=sucess.page;
    },error=>{

    }
    );
    console.log(url,'dattaaa')
}

  onDelete(){
    this.allService.getFamilylist("pageNo="+this.pageNo+"&pageSize="+this.pageSize).subscribe(sucess=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      // alert();
      },error=>{
  
      }
      );
  }

  onrefresh(){
    this.allService.getFamilylist("pageNo=1&pageSize=5").subscribe(sucess=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      })
  }

buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['product-family-form']);   
}else if(data.event=='edit'){
  // alert(JSON.stringify(data.data));
  this.router.navigate(['product-family-form'],{ queryParams: { data: JSON.stringify(data.data.productFamilyId)} });
    console.log(data.data, 'data')
} else if(data.event == 'delete'){
  // alert(JSON.stringify(  data));
  this.allService.deleteProductFamily(data.data.productFamilyId, data.data.updatedBy).subscribe((res)=>{
    console.log(res);
    alert('Record deleted');
   this.onrefresh();
   this.onDelete();
    // this.changePageSortSearch(url);
  })  

} 
}
}