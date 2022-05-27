import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-attributes',
  templateUrl: './product-attributes.component.html',
  styleUrls: ['./product-attributes.component.scss']
})
export class ProductAttributesComponent  {
  permission:any=[true,false,false];
  headerList:any=[];
  templateId: any;
  sectionId: any;
  data:any={};
  tabId: any;
  url: any="pageNo=1&pageSize=5";
  constructor(private sweetAlert: SweetalertServiceService,private allService: CrmservicesService, private router:Router,private activateRoute:ActivatedRoute) { 
this.activateRoute.queryParams.subscribe((params:any)=>{
this.templateId=JSON.parse(params.data);
this.sectionId=JSON.parse(params.data1);
this.tabId=JSON.parse(params.data2);
this.allService.getEntityTemplateAttributeidd1(this.templateId,this.sectionId,this.url).subscribe(sucess=>{
  this.headerList=sucess.headerlist; 
  this.data=sucess.page;
  },error=>{}
  );
});}
  changePageSortSearch(url:any){
    this.url=url;
    this.allService.getEntityTemplateAttributeidd1(this.templateId,this.sectionId,url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{});
  }

  back(){

    this.router.navigate(['/crm/product-template-form'],
    { queryParams: 
      { 
        data: this.templateId
      } });
    
  }
    buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['crm/product-attribute-form'],
      { queryParams: 
        { 
          templateId: this.templateId,
          sectionId: this.sectionId,
          tabId: this.tabId,
          isDetails:false
        } }); 
    }else if(data.event=='edit'){
      this.router.navigate(['crm/product-attribute-form'],
      { queryParams: 
        { productEntityTemplateId: JSON.stringify(data.data.productEntityTemplateId)} });
    }
    else if(data.event == 'delete'){
      
    }else if(data.event == "inSidebtn"){
      if(data.btnEvent=='Update'){
        this.router.navigate(['crm/product-attribute-form'],
        { queryParams: 
          { 
            productEntityTemplateId: JSON.stringify(data.data.productEntityTemplateAttributesId),
            templateId: this.templateId,
            sectionId: this.sectionId,
            tabId: this.tabId,
            isDetails:false
          }
        });
      }else if(data.btnEvent=='Delete'){
      this.allService.deleteProdEntityAttribute(data.data.productEntityTemplateAttributesId,
        JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe((res)=>{
        this.sweetAlert.recordDeleted();
        this.changePageSortSearch(this.url)
      });
      }else if(data.btnEvent=="Details"){
        this.router.navigate(['crm/product-attribute-form'],
        { queryParams: 
          { 
            productEntityTemplateId: JSON.stringify(data.data.productEntityTemplateAttributesId),
            templateId: this.templateId,
            sectionId: this.sectionId,
            tabId: this.tabId,
            isDetails:true
          }
        });
      }
    }
    }

}
