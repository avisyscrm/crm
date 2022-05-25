import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-family',
  templateUrl: './product-family.component.html',
  styleUrls: ['./product-family.component.scss']
})
export class ProductFamilyComponent implements OnInit {
  permission:any=[true,true,true];
  headerList:any=[];
  url="pageNo=1&pageSize=5"
  constructor(private allService:CrmservicesService, private router:Router, private sweetAlert: SweetalertServiceService) { }
  data:any={};
  ngOnInit(): void {
    this.allService.getFamilylist(this.url).subscribe(sucess=>{
    this.headerList=sucess.headerlist  ; 
    this.data=sucess.page;
    },
    error=>{}
    );
}
changePageSortSearch(url:any){
  this.url=url;
  this.allService.getFamilylist(url).subscribe(sucess=>{
    this.data=sucess.page;
    },error=>{
    }
    );
}
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['crm/product-family-form']);   
}else if(data.event=='edit'){
  this.router.navigate(['crm/product-family-form'],{ queryParams: { data: JSON.stringify(data.data.productFamilyId)} });
    console.log(data.data, 'data')
} else if(data.event == 'delete'){
  this.allService.deleteProductFamily(data.data.productFamilyId, 0).subscribe((res)=>{
    this.sweetAlert.recordDeleted();
   this.changePageSortSearch(this.url);
  })  
} 
}
}
