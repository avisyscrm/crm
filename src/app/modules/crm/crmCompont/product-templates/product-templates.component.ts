import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-templates',
  templateUrl: './product-templates.component.html',
  styleUrls: ['./product-templates.component.scss']
})
export class ProductTemplatesComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  constructor(private allService:CrmservicesService, private router:Router) { }
  data:any={};
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  ngOnInit(): void {
    this.allService.getEntityTemplate("pageNo=1&pageSize=5").subscribe(sucess=>{
    this.headerList=sucess.headerlist  ; //sucess.headerList;

    this.data=sucess.page;
    },error=>{

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
    this.allService.getEntityTemplate(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      );
      console.log(url,'dattaaa')
  }

  onDelete(){
    this.allService.getEntityTemplate("pageNo="+this.pageNo+"&pageSize="+this.pageSize).subscribe(sucess=>{
       this.data=sucess.page;
      },error=>{
  
      }
      );
  }

  onrefresh(){
    this.allService.getEntityTemplate("pageNo=1&pageSize=5").subscribe(sucess=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      })
  }

  buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['crm/product-template-form']);   
    }
    else if(data.event=='edit'){
      // alert(JSON.stringify(data.data));
        this.router.navigate(['crm/product-template-form'],{ queryParams: { data: JSON.stringify(data.data.productEntityTemplateId)} });
        console.log(data, 'data')
    }
    else if(data.event == 'delete'){
      this.allService.deleteProductTemplate(data.data.productEntityTemplateId,data.data.updatedBy).subscribe((res)=>{
        alert('Record Deleted');
        console.log(res);
        this.onDelete();
        this.onrefresh();
      })
    }


  }


}
