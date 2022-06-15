import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from './../../crm-services/crmservices.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss','../../crm/crm.component.scss']
})
export class CommonFormComponent implements OnInit {
  codeValue:string;
  codeValue1: string;
  intialvalue: any;
  defaultIntialValue:any;
  actionBtn:string = "Save";
  actionBtn1:string = "Save";
  permission:any=[true,true,true];
  headerList:any=[];
  url="pageNo=1&pageSize=5";
  data:any={};
  modalRef: BsModalRef;
 
  constructor(private service: CrmservicesService, private alertService: SweetalertServiceService,
    private route: ActivatedRoute, private router: Router,private modalService: BsModalService,) { 
    this.intialvalue = this.commonMaster.value;
    this.route.queryParams.subscribe((params)=>{
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getParentValueByID(params.data);
        this.commonMaster.disable();
      }
    })
  }
  
  getParentValueByID(id:number){
     this.service.getOneCommonParent(id).subscribe((response:any)=>{
      this.commonMaster.patchValue(response);
      this.intialvalue = response;
      this.getAllchild(response.mstName);
     })
  }
  

  ngOnInit(): void {
  }

  commonMaster = new FormGroup({
    commonMstId : new FormControl(),
    mstName: new FormControl('', Validators.required),
    code: new FormControl(''),
    value: new FormControl('', Validators.required),
    foreignKey: new FormControl(),
    isMst: new FormControl(true),
    createdBy: new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  })

  commonMasterModal = new FormGroup({
    commonMstId : new FormControl(),
    mstName: new FormControl(),
    code: new FormControl(''),
    value: new FormControl('', Validators.required),
    foreignKey: new FormControl(),
    isMst: new FormControl(false),
    createdBy: new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  })

  back(){
    this.router.navigate(['/crm/crm/commonAll']);
  }

  getValue(){
    this.commonMaster.controls['code'].patchValue((this.commonMaster.controls['value'].value.replace(/\s/g, "_")).toUpperCase());
  }

  getValue1(){
    this.commonMasterModal.controls['code'].patchValue((this.commonMasterModal.controls['value'].value.replace(/\s/g, "_")).toUpperCase());
  }

  submit(){
    this.commonMaster.patchValue(this.service.removingSpace(this.commonMaster.value));
   if(this.commonMaster.valid){
    if(this.actionBtn != "Update"){
      this.service.postCommonData(this.commonMaster.value).subscribe((response:any)=>{
        if (response.statusCode == 23505) {
          this.alertService.SelectRecord("Common Master already exist");
        } else {
          this.alertService.RecordAdded('/crm/crm/commonAll');
        }
      }, (error)=>{ 
        console.log('Error');
      })
    }
   }
    
  }

  submit1(){
    this.commonMasterModal.patchValue(this.service.removingSpace(this.commonMasterModal.value));
   if(this.commonMasterModal.valid){
    this.commonMasterModal.controls['mstName'].patchValue(this.commonMaster.get('mstName').value);
    this.commonMasterModal.controls['foreignKey'].patchValue(this.commonMaster.get('mstName').value);
    if(this.actionBtn1 != "Update"){
      this.service.postCommonData(this.commonMasterModal.getRawValue()).subscribe((response:any)=>{
        if (response.statusCode == 23505) {
          this.alertService.SelectRecord("Common Master already exist");
        } else {
          this.alertService.RecordAddedStatic();
          this.modalRef.hide();
        this.changePageSortSearch(this.url);
        }
      }, (error)=>{ 
        console.log('Error');
      })
    }
    else{
      this.service.updateCommonData(this.commonMasterModal.getRawValue()).subscribe((response:any)=>{
        alert(JSON.stringify(response));
        this.alertService.RecordUpdatedStatic();
        this.modalRef.hide();
        this.changePageSortSearch(this.url);
      })
    }
   }
  }

  resetForm() {
    this.commonMaster.reset(this.intialvalue);
  }

  resetForm1() {
    this.commonMasterModal.reset(this.defaultIntialValue);
  }

  get getControl() {
    return this.commonMaster.controls;
  }

  get getControlPop() {
    return this.commonMasterModal.controls;
  }

  getAllchild(name:string){
    this.service.getAllCommonChild(name,this.url).subscribe((sucess : any)=>{
      this.headerList = sucess.headerlist;
      this.data = sucess.page;
      },error=>{
      }
      );
  }

  //
  changePageSortSearch(url:any){
    this.url=url;
    this.service.getAllCommonChild(this.commonMaster.get('mstName').value,url).subscribe((sucess : any)=>{
      this.data=sucess.page;
      },error=>{
      }
      );
  }
  buttonEvent1(data:any,template){
  if(data.event=='add'){
    this.actionBtn1 = "Save";
    this.commonMasterModal.reset();
    this.defaultIntialValue = this.commonMasterModal.value;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));
  }
  else if(data.event=='edit'){
    this.actionBtn1 = "Update";
    this.service.getOneCommonParent(data.data.commonMstId).subscribe((response)=>{
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));
      this.commonMasterModal.patchValue(response);
      this.defaultIntialValue = response;
    },(error)=>{console.log(error);
    })
  }
   else if(data.event == 'delete'){
    this.service.deleteCommonRecord(data.data.commonMstId, JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe((res)=>{
      this.alertService.recordDeleted();
     this.changePageSortSearch(this.url);
    })  
  } 
  }

}
