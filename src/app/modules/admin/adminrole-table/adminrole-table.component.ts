import { CrmservicesService } from './../../crm/crm-services/crmservices.service';
import { AllservicesService } from './../../client/services/allservices.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminrole-table',
  templateUrl: './adminrole-table.component.html',
  styleUrls: ['./adminrole-table.component.scss']
})
export class AdminroleTableComponent implements OnInit {

 
 
  permission:any=[true,true,true];
  headerList:any=[];
  ajayStri : any ;
  pageNo:any=1;
  pageSize:any=5;
  sortBy:any="first_name";
  sortDirection:any = "asc";
  data:any={};
  datas:any;
  header:any;
  options:any;
  accessToken:any;
  
  constructor(private router : Router, private http: HttpClient, private allService :CrmservicesService) { }

  ngOnInit(): void {  
    this.allService.GetDataTableRoles("pageNo=1&pageSize=5").subscribe(sucess=>{
      this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      },error=>{
  
      }
      );
 }




  changePageSortSearch(url:any){
    // GetDataTableRoles   
    this.allService.GetDataTableRoles(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      ); 
  }
  
  
  
  buttonEvent1(data:any){
  if(data.event=='add'){
    this.router.navigate(['crm/create-role']);   
  }else if(data.event=='edit'){
    // alert(JSON.stringify(data.data));
    // this.router.navigate(['user-all'],{ queryParams: { data: JSON.stringify(data.data.productFamilyId)} });
    // console.log(data.data, 'data')
  } else if(data.event == 'delete'){
    // alert(JSON.stringify(  data));
    // alert(JSON.stringify(  data.data.email));

  
  } 
  }

}
