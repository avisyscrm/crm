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
  
  constructor(private allService:CrmservicesService, private router:Router,private http: HttpClient) { }
  // fetchToken = new FormGroup({
  //   username : new FormControl('hrishikesh.rane@avisys.in'),
  //   password : new FormControl('reset@123'),
  // });

  ngOnInit(): void {  
    // this.getAccessToken();    
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
      // this.headerList=sucess.headerlist;
      this.data=sucess.page;
      },error=>{
        alert('get not working')
      }
      );
}

  changePageSortSearch(url:any){
    // alert(url);
  // alert(url);
    this.ajayStri =""+ url.toString();
    var splittedpaging = this.ajayStri.split('&',4);
    this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
    this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
    this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
    this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);
  

    // alert(url + 'ertyuiop');
    this.getTableWithoutHeader(url);
      console.log(url,'dattaaa')
  }
  
  
  
  buttonEvent1(data:any){
  if(data.event=='add'){
    this.router.navigate(['crm/create-user']);   
  }
  else if(data.event=='edit'){
    // alert(JSON.stringify(data.data));
    // this.router.navigate(['user-all'],{ queryParams: { data: JSON.stringify(data.data.productFamilyId)} });
     } else if(data.event == 'delete'){

    // this.http.delete('http://192.168.1.11:8030/users/delete/'+data.data.email).subscribe(()=>{
      this.allService.deleteUser(data.data.email).subscribe(()=>{
        alert("Record Deleted")
        this.getTableWithoutHeader("pageNo="+this.pageNo+"&pageSize="+this.pageSize+"&sort="+this.sortBy+"&sort="+this.sortDirection,)
    },(error)=>{
      alert("Something went wrong");
    })
    
  
  } 
  }

}
