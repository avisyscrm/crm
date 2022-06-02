import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberService } from '../../number-services/numberservices';

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
  constructor(private allService:NumberService,private router:Router,
    private sweetAlert: SweetalertServiceService) { 
      this.allService.getNumberSchemes(this.url).subscribe(sucess=>{
        this.headerList=sucess.headerlist  ;
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
    this.allService.getnumberScheme(url).subscribe(sucess=>{
     this.data=sucess.page;
     },error=>{});
  }
 
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['/number/numberScheme']);   
}else if(data.event=='edit'){
  this.router.navigate(['/number/numberScheme'],{ queryParams: { data:data.data.numberSchemeId} });
    console.log(data, 'data')
}
 else if(data.event=='delete'){
 //  this.allService.deletenumberScheme(data.data.numberTypeId).subscribe((res)=>{
    this.sweetAlert.recordDeleted();  
    this.changePageSortSearch(this.url);
  // })
 } 
  
}

}
