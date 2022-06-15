import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';

@Component({
  selector: 'app-number-scheme-table',
  templateUrl: './number-scheme-table.component.html',
  styleUrls: ['./number-scheme-table.component.scss']
})
export class NumberSchemeTableComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  data:any={};
  
  url="pageNo=1&pageSize=5";
  constructor(private allService:NumberservicesService,private router:Router,
    private sweetAlert: SweetalertServiceService) { 
      this.allService.getNumberSchemes(this.url).subscribe(sucess=>{
        this.headerList=sucess.headerlist;
        this.data=sucess.page;
        },error=>{
          console.log("Hello");
        }
        );
    }
  
  ngOnInit(): void {
    
   
  }
  changePageSortSearch(url:any){
    this.url=url;
    this.allService.getNumberSchemes(url).subscribe(sucess=>{
     this.data=sucess.page;
     },error=>{});
  }
 
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['/number/number/numberScheme']);   
}else if(data.event=='edit'){
  this.router.navigate(['/number/number/numberScheme'],{ queryParams: { data:data.data.numberSchemeId} });
    console.log(data, 'data')
}
 else if(data.event=='delete'){
  this.allService.deletenumberScheme(data.data.numberSchemeId,JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe((res)=>{
    this.sweetAlert.recordDeleted();  
    this.changePageSortSearch(this.url);
  })
 } 
  
}

}
