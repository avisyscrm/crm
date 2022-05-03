import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-hr-departments',
  templateUrl: './hr-departments.component.html',
  styleUrls: ['./hr-departments.component.scss']
})
export class HrDepartmentsComponent implements OnInit {

  permission:any=[true,true,true];
  headerList:any=[];
  constructor(private allService:AllservicesService,private router:Router) { }
  data:any={};
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  ngOnInit(): void {
    this.allService.getEntityGroup("pageNo=1&pageSize=5").subscribe(sucess=>{
    this.headerList=sucess.headerlist  ; //sucess.headerList;

    this.data=sucess.page;
    },error=>{

    }
    );
  }
  changePageSortSearch(url:any){
    this.ajayStri =""+ url.toString();
    var splittedpaging = this.ajayStri.split('&',4);
    this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
    this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
    this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
    this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);
    this.allService.getEntityGroup(url).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      );
      console.log(url,'dattaaa')
  }
  onDelete(){
    this.allService.getEntityGroup("pageNo="+this.pageNo+"&pageSize="+this.pageSize).subscribe(sucess=>{
      this.data=sucess.page;
      },error=>{
  
      }
      );
  }

  onrefresh(){
    this.allService.getEntityGroup("pageNo=1&pageSize=5").subscribe(sucess=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
  
      this.data=sucess.page;
      })
  }

  buttonEvent1(data:any){
if(data.event=='add'){
  this.router.navigate(['entity-group']);   
}else if(data.event=='edit'){
  // alert(JSON.stringify(data.data));
  this.router.navigate(['entity-group'],{ queryParams: { data: JSON.stringify(data.data.entityGroupsId)} });
    console.log(data, 'data')
}
 else if(data.event=='delete'){
   this.allService.deleteEntitygroups(data.data.entityGroupsId,data.data.createdBy).subscribe((res)=>{
    alert('Record Deleted');
    console.log(res);
    // this.changePageSortSearch("pageNo=1&pageSize=5");
    this.onDelete();
    this.onrefresh(); 
   })
 } 
  
}

  // dplistTab: boolean = true;
  // dpgridTab: boolean;

  // constructor(private modalService: BsModalService) { }
  // modalRef: BsModalRef;
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
  // AddModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(
  //     template,
  //     Object.assign({}, { class: 'gray modal-md' })
  //   );
  // }
}
