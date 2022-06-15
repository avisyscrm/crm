import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-common-all',
  templateUrl: './common-all.component.html',
  styleUrls: ['./common-all.component.scss']
})
export class CommonAllComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  url="pageNo=1&pageSize=5"
  constructor(private allService:CrmservicesService, private router:Router, 
    private sweetAlert: SweetalertServiceService) { }
  data:any={};
  ngOnInit(): void {
    this.allService.getAllCommonParent(this.url).subscribe((sucess:any)=>{
    this.headerList=sucess.headerlist  ; 
    this.data=sucess.page;
    },
    error=>{}
    );
}
changePageSortSearch(url:any){
  this.url=url;
  this.allService.getAllCommonParent(url).subscribe((sucess : any)=>{
    this.data=sucess.page;
    },error=>{
    }
    );
}
buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['crm/crm/commonForm']);   
}else if(data.event=='edit'){
  this.router.navigate(['crm/crm/commonForm'],{ queryParams: { data: JSON.stringify(data.data.commonMstId)} });
} else if(data.event == 'delete'){
  this.allService.deleteCommonRecord(data.data.commonMstId, JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe((res)=>{
    this.sweetAlert.recordDeleted();
   this.changePageSortSearch(this.url);
  })  
} 
}

}
