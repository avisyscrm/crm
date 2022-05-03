import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-attributes',
  templateUrl: './product-attributes.component.html',
  styleUrls: ['./product-attributes.component.scss']
})
export class ProductAttributesComponent implements OnInit {


  permission:any=[true,true,false];
  headerList:any=[];
  constructor(private allService: CrmservicesService, private router:Router) { }
  data:any={};
  

  ngOnInit(): void {

    this.allService.getEntityTemplate("pageNo=1&pageSize=5").subscribe(sucess=>{
      this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      },error=>{
  
      }
      );
  }
  changePageSortSearch(url:any){
    this.allService.getEntityTemplate(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      );
      console.log(url,'dattaaa')
  }
  // getnavigation(event:any){
    
  // }

 
    buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['crm/product-attribute-form']);   
    }else if(data.event=='edit'){
      // alert(JSON.stringify(data.data));
      this.router.navigate(['crm/product-attribute-form'],{ queryParams: 
        { data: JSON.stringify(data.data.productEntityTemplateId)} });
        console.log(data, 'data')
    }
    else if(data.event == 'delete'){
      // alert(data.data.productEntityTemplateId);
      // this.allService.deleteProdEntityAttribute(data.data.productEntityTemplateId,data.data.updatedBy).subscribe((res)=>{
      //   console.log(res);
      //   this.ngOnInit();
      // })
    }
    }
}
