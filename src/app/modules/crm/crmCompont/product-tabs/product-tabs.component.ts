import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-tabs',
  templateUrl: './product-tabs.component.html',
  styleUrls: ['./product-tabs.component.scss']
})
export class ProductTabsComponent implements OnInit {

  permission:any=[true,true,false];
  data={};
headerList:any=[];
  constructor(private allService: CrmservicesService,private router:Router) { }

  ngOnInit(): void {
    this.allService.getEntityTemplate("?pageNo=1&pageSize=5").subscribe(sucess=>{
      this.headerList=sucess.headerlist  ; 
      this.data=sucess.page;
      },error=>{
        alert(error);
      }
      );
  }
  buttonEvent1(event:any){ 
if(event.event=='add'){
  this.router.navigate(['crm/product-tabs-form']); 
  
}else if(event.event=='edit'){
this.router.navigate(['crm/product-tabs-form'],{ queryParams: { data: JSON.stringify(event.data.productEntityTemplateId)}});
}
  }
  changePageSortSearch(url:any){
    
    console.log(url+" url data");
    
    this.allService.getEntityTemplate(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
        alert(error);
      }
      );
  }


}
