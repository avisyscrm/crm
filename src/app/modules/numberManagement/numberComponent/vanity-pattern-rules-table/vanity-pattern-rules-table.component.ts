import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';

@Component({
  selector: 'app-vanity-pattern-rules-table',
  templateUrl: './vanity-pattern-rules-table.component.html',
  styleUrls: ['./vanity-pattern-rules-table.component.scss']
})
export class VanityPatternRulesTableComponent implements OnInit {


  permission:any=[true,true,true];
  headerList:any=[];
  data:any={};
  url="pageNo=1&pageSize=5";

  constructor(private allService:NumberservicesService,private router:Router,
    private sweetAlert: SweetalertServiceService) { 
      this.allService.getVanityPatternRules(this.url).subscribe(sucess=>{
        console.log(sucess);
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
    this.allService.getVanityPatternRules(url).subscribe(sucess=>{
     this.data=sucess.page;
     },error=>{});
  }
 
  buttonEvent1(data:any){
    if(data.event=='add'){
     this.router.navigate(['/number/number/vanityPatternRule']);   
   }else if(data.event=='edit'){
     this.router.navigate(['/number/number/vanityPatternRule'],{ queryParams: { data:data.data.vanityNumberId} });
       console.log(data, 'data')
   }
    else if(data.event=='delete'){
     this.allService.deleteVanityPatternRule(data.data.vanityNumberId,JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe((res)=>{
       this.sweetAlert.recordDeleted();  
       this.changePageSortSearch(this.url);
     })
    } 
      
   }
}
