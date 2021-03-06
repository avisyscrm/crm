import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-dynamicform-datatable',
  templateUrl: './dynamicform-datatable.component.html',
  styleUrls: ['./dynamicform-datatable.component.scss']
})
export class DynamicformDatatableComponent implements OnInit {

  permission:any=[true,true,false];
  headerList:any=[];
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  detailsForm: any;
  isSection: String="";
  data:any={};
  productEntityElementId:number;
  byDefaultPaging:any = "pageNo=1&pageSize=5";
  name: any;

  constructor(private allService:CrmservicesService, private router:Router) {    
    this.allService.getDynamicTableData(0,"pageNo=1&pageSize=5").subscribe((sucess)=>{
      this.headerList=sucess.headerlist;
    })
      this.allService.isStringUrl.subscribe(sucessId=>{
        debugger
        this.productEntityElementId = +sucessId?.data;
        this.name=sucessId.name;
        this.getDynamicTableData(this.productEntityElementId,this.byDefaultPaging);
      })
   }

   getDynamicTableData(id,paging){
    this.allService.getDynamicTableData(id,paging).subscribe((sucess)=>{
      this.data=sucess.page;
    })
   }
   
  ngOnInit(): void {}
changePageSortSearch(url:any){
    this.byDefaultPaging = url;
    this.getDynamicTableData(this.productEntityElementId,url);
}
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['crm/dynamicForm'],{ queryParams: {id: this.productEntityElementId}});   
}else if(data.event=='edit'){
  console.log("test"+JSON.stringify(data.data.templateId)); 
  this.router.navigate(['crm/dynamicForm'],{ queryParams: {id: data.data.templateId, tabId: data.data.tabId,version: data.data.version }});
} else if(data.event == 'delete'){ 

} 
}

}
