import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

 
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
  byDefaultPaging:any="pageNo=1&pageSize=5";
  constructor(private allService:CrmservicesService, private router:Router,private http: HttpClient) { }
  ngOnInit(): void {  
  
    this.getUsersData("pageNo=1&pageSize=5");  
 }



  getUsersData(url:any){
      this.allService.getAlllUsers(url).subscribe(sucess=>{
      console.log("from sucess: "+sucess);
      this.headerList=sucess.headerlist;
      this.data=sucess.page;
      },error=>{}
      );  
  }

  getTableWithoutHeader(url:any){
    this.allService.getAlllUsers(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
      }
      );
}

  changePageSortSearch(url:any){
    console.log(url );
    
    this.byDefaultPaging=url;

    this.getTableWithoutHeader(url);
      console.log(url,'dattaaa')
  }
  
  
  
  buttonEvent1(data:any){
  if(data.event=='add'){ 
    this.router.navigate(['crm/crm/create-user']);   
  }
  else if(data.event=='edit'){
    this.router.navigate(['crm/crm/create-user'],{ queryParams: data.data });
     } else if(data.event == 'delete'){
      this.allService.deleteUser(data.data.email).subscribe(()=>{
        this.getTableWithoutHeader(this.byDefaultPaging);
    },(error)=>{
    })
    
  
  } 
  }

}
