import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-hierachy',
  templateUrl: './product-hierachy.component.html',
  styleUrls: ['./product-hierachy.component.scss']
})
export class ProductHierachyComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  constructor(private allService:CrmservicesService,private router:Router,
    private sweetAlert: SweetalertServiceService) { }
  data:any={};
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  url="pageNo=1&pageSize=5";
  ngOnInit(): void {
    this.allService.getproductHierarchy("pageNo=1&pageSize=5").subscribe(sucess=>{
    this.headerList=sucess.headerlist  ;
    this.data=sucess.page;
    },error=>{

    }
    );
  }
  changePageSortSearch(url:any){
    this.url=url;
    this.allService.getproductHierarchy(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{});
  }
  onDelete(){
    this.allService.getproductHierarchy(this.url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{}
      );
  }
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['crm/product-hierachy-form']);   
}else if(data.event=='edit'){
  this.router.navigate(['crm/product-hierachy-form'],{ queryParams: { data: JSON.stringify(data.data.entityGroupsId)} });
    console.log(data, 'data')
}
 else if(data.event=='delete'){
   this.allService.deleteHierarchy(data.data.productHierarchyId).subscribe((res)=>{
    this.sweetAlert.recordDeleted();  
    this.onDelete();
   })
 } 
  
}

}
