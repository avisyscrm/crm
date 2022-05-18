
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  permission:any=[true,true,true];
  headerList:any=[];
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  data:any={};
  byDefaultPaging:any = "pageNo=1&pageSize=5";

  constructor(private allService:CrmservicesService, private router:Router) { }

  ngOnInit(): void {
    // this.allService.getEmails("pageNo=1&pageSize=5").subscribe((sucess:any)=>{
    //   this.headerList=sucess.headerlist  ; //sucess.headerList;
    // this.data=sucess.page;
    // },
    // (error)=>{
    //   console.log(error)
    // })
    let sucess = this.allService.getEmails("pageNo=1&pageSize=5")
    this.headerList=sucess.headerlist  ; //sucess.headerList;
    this.data=sucess.page;
  }

  pagination(url){
   
  }
 


  changePageSortSearch(url:string){
    this.ajayStri =""+ url.toString();
    // var splittedpaging = this.ajayStri.split('&',4);
    // this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
    // this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
    // this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
    // this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);
    this.byDefaultPaging=url;

    this.allService.getAllEmailTemplate(url).subscribe((sucess:any)=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
    this.data=sucess.page;
    },
    (error)=>{
      console.log(error)
    })

  } 

  buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['crm/emailTemplateForm']);   
    }else if(data.event=='edit'){
      // alert(JSON.stringify(data.data));
      this.router.navigate(['crm/emailTemplateForm'],{ queryParams: { data: JSON.stringify(data.data.emailTemplateId)} });
        console.log(data.data, 'data')
    } else if(data.event == 'delete'){
      // alert(JSON.stringify(data));
      this.allService.deleteEmailTemplateId(data.data.emailTemplateId, data.data.updatedBy).subscribe((res)=>{
        console.log(res);
        this.changePageSortSearch(this.byDefaultPaging);
      })  
    
    } 
    }

}
