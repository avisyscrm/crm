import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';

@Component({
  selector: 'app-number-format-all',
  templateUrl: './number-format-all.component.html',
  styleUrls: ['./number-format-all.component.scss']
})
export class NumberFormatAllComponent implements OnInit {
  permission:any=[false,true,false];
  data:any={};
  headerList:any=[];

  constructor(private allService: NumberservicesService,private router:Router,
    private sweetAlert: SweetalertServiceService) { }

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
  if(data.event=='add'){}
  else if(data.event=='edit'){
    this.router.navigate(['/number/numberFormat'],{ queryParams: { data:data.data.numberTypeId} });
  }
   else if(data.event=='delete'){} 
    
  }

}
