import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-hr-payroll',
  templateUrl: './hr-payroll.component.html',
  styleUrls: ['./hr-payroll.component.scss']
})
export class HrPayrollComponent implements OnInit {
  permission:any=[true,true,false];
  data={};
headerList:any=[];
  constructor(private allService:AllservicesService,private router:Router) { }

  ngOnInit(): void {
    this.allService.getEntityTemplate("?pageNo=1&pageSize=5").subscribe(sucess=>{
      this.headerList=sucess.headerlist  ; 
      this.data=sucess.page;
      },error=>{
        alert(error);
      }
      );
  }
  buttonEvent1(event:any){ 
if(event.event=='add'){
  this.router.navigate(['product-tab']); 
  
}else if(event.event=='edit'){
this.router.navigate(['product-tab'],{ queryParams: { data: JSON.stringify(event.data.productEntityTemplateId)}});
}
  }
  changePageSortSearch(url:any){
    
    console.log(url+" url data");
    
    this.allService.getEntityTemplate(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
        alert(error);
      }
      );
  }
  

  // dplistTab: boolean = true;
  // dpgridTab: boolean;

  // constructor() { }

  // ngOnInit(): void {
  // }
  // onTab(number) {
  //   this.dplistTab = false;
  //   this.dpgridTab = false;
  //   if (number == '1') {
  //     this.dplistTab = true;
  //   }
  //   else if (number == '2') {
  //     this.dpgridTab = true;
  //   }
  // }
}
