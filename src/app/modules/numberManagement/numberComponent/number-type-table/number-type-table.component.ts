import { NumberservicesService } from './../../numberServices/numberservices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';

@Component({
  selector: 'number-type-table',
  templateUrl: './number-type-table.component.html',
  styleUrls: ['./number-type-table.component.scss']
})
export class NumberTypeTableComponent implements OnInit {

  permission:any=[true,false,true];
  headerList:any=[];
  constructor(private router:Router,
    private sweetAlert: SweetalertServiceService, private allService: NumberservicesService) { }
  data:any={};
  url="pageNo=1&pageSize=5";
  ngOnInit(): void {
    this.allService.getnumberType(this.url).subscribe(sucess=>{
    this.headerList=sucess.headerlist  ;
    this.data=sucess.page;
    },error=>{

    }
    );
  }
  changePageSortSearch(url:any){
    this.url=url;
    this.allService.getnumberType(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{});
  }
 
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['/number/numberType']);   
}else if(data.event=='edit'){
  this.router.navigate(['/number/numberType'],{ queryParams: { data:data.data.numberTypeId} });
    console.log(data, 'data')
}
 else if(data.event=='delete'){
   this.allService.deletenumberType(data.data.numberTypeId).subscribe((res)=>{
    this.sweetAlert.recordDeleted();  
    this.changePageSortSearch(this.url);
   })
 } 
  
}
}
