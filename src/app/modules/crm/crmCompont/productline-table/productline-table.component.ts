import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-productline-table',
  templateUrl: './productline-table.component.html',
  styleUrls: ['./productline-table.component.scss']
})
export class ProductlineTableComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  constructor(private allService: CrmservicesService,private router:Router) { }
  data:any={};
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  ngOnInit(): void {
    this.allService.getProductList("pageNo=1&pageSize=5").subscribe(sucess=>{
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
        this.allService.getProductList(url).subscribe(sucess=>{
        this.data=sucess.page;
      },error=>{
  
      }
      );
      console.log(url,'dattaaa')
  }
 
  onDelete(){
    this.allService.getProductList("pageNo="+this.pageNo+"&pageSize="+this.pageSize).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      );  
  }


  onrefresh(){
    this.allService.getProductList("pageNo=1&pageSize=5").subscribe(sucess=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      })
  }

  buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['crm/productline-form']);   
    }else if(data.event=='edit'){
      // alert(JSON.stringify(data.data));
      this.router.navigate(['crm/productline-form'],{ queryParams: { data: JSON.stringify(data.data.productLineId)} });
        console.log(data, 'data')
    }else if(data.event == 'delete'){
      // alert(JSON.stringify(  data));
      console.log(data.data.productLineId);
      console.log(data.data.updatedBy);
      
      
      this.allService.deleteLine(data.data.productLineId, data.data.createdBy)
      .subscribe((res)=>{
        console.log(res);
        alert('Record Deleted');
        this.onrefresh();
        this.onDelete();
      })  
  
    } 
  } 


}
