import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-hr-events',
  templateUrl: './hr-events.component.html',
  styleUrls: ['./hr-events.component.scss']
})
export class HrEventsComponent implements OnInit {

  permission:any=[true,true,false];
  headerList:any=[];
  constructor(private allService:AllservicesService, private router:Router) { }
  data:any={};
  // ngOnInit(): void {
  //   this.allService.getEntityTemplateAttribute("pageNo=1&pageSize=5").subscribe(sucess=>{
  //   this.headerList=sucess.headerlist  ; //sucess.headerList;

  //   this.data=sucess.page;
  //   },error=>{

  //   }
  //   );
  // }

  // templateesss
  // changePageSortSearch(url:any){
  //   this.allService.getEntityTemplateAttribute(url).subscribe(sucess=>{
  //     this.data=sucess.page;
  //     },error=>{
  
  //     }
  //     );
  //     console.log(url,'dattaaa')
  // }

  ngOnInit(): void {
    //   this.allService.getEntityTemplateAttribute("pageNo=1&pageSize=5").subscribe(sucess=>{
    // this.headerList=sucess.headerlist  ; //sucess.headerList;

    // this.data=sucess.page;
    // },error=>{

    // }
    // );

    this.allService.getEntityTemplate("pageNo=1&pageSize=5").subscribe(sucess=>{
      this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      },error=>{
  
      }
      );
  }
  changePageSortSearch(url:any){
    this.allService.getEntityTemplate(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      );
      console.log(url,'dattaaa')
  }
  // getnavigation(event:any){
    
  // }

 
    buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['product-attribute-form']);   
    }else if(data.event=='edit'){
      // alert(JSON.stringify(data.data));
      this.router.navigate(['product-attribute-form'],{ queryParams: 
        { data: JSON.stringify(data.data.productEntityTemplateId)} });
        console.log(data, 'data')
    }
    else if(data.event == 'delete'){
      // alert(data.data.productEntityTemplateId);
      // this.allService.deleteProdEntityAttribute(data.data.productEntityTemplateId,data.data.updatedBy).subscribe((res)=>{
      //   console.log(res);
      //   this.ngOnInit();
      // })
    }
    }

  // isTimelineCollapsed: boolean = true;
  // isFull: any;
  // activitycard: boolean = true;

  // constructor() { }

  // ngOnInit(): void {
  // }

  // CardRemoveActivity() {
  //   this.activitycard = false;
  // }


  // fullScreenSection(number) {
  //   if (number == 1) {
  //     if (this.isFull) {
  //       this.isFull = false;
  //     }
  //     else {
  //       this.isFull = true;
  //     }
  //   }
  // }
}
