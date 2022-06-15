import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-atribute-master-summmary',
  templateUrl: './product-atribute-master-summmary.component.html',
  styleUrls: ['./product-atribute-master-summmary.component.scss']
})
export class ProductAtributeMasterSummmaryComponent implements OnInit {
  permission=[true,true,true];
  data={};
  url="pageNo=1&pageSize=5";
  headerList=[];
  constructor(private crmService:CrmservicesService,private router:Router, private sweetAlert: SweetalertServiceService) { 
    this.crmService.getMasterProductAtribute(this.url).subscribe((sucess:any)=>{
      this.data=sucess.page;
     this.headerList=sucess.headerlist;
    });
  }
  ngOnInit(): void {
  }

  buttonEvent1(event){
    console.log(event)
    if(event.event=='add'){
      this.router.navigate(["/crm/crm/Product-Atribute-Master"]);
    }else if(event.event=='edit'){

      // let queryParamsObj = {productAttributeId:event.data.productAttributeId};
      // this.router.navigate(["/crm/Product-Atribute-Master"],{ queryParams: queryParamsObj});

      this.router.navigate(["/crm/crm/Product-Atribute-Master"],{ queryParams: { data: event.data.productAttributeId} });

    }else if(event.event == 'delete'){
      this.crmService.deleteProductAttribute(event.data.productAttributeId,JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe(sucess=>{
        this.sweetAlert.recordDeleted();
      this.changePageSortSearch(this.url);
      });
    }
  }
  changePageSortSearch(url){
    this.url=url;
    this.crmService.getMasterProductAtribute(url).subscribe((sucess:any)=>{
      this.data=sucess.page;
    });
  }
}
