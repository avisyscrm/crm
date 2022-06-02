import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';

@Component({
  selector: 'app-number-format-form',
  templateUrl: './number-format-form.component.html',
  styleUrls: ['./number-format-form.component.scss','../../numberManagement.scss']
})
export class NumberFormatFormComponent implements OnInit {
  permission:any=[true,true,true];
  data:any={};
  headerList:any=[];
  typeId!:number;
  defaultIntialValue:any
  intialvalue: any;
  actionBtn = "Save";
  modalRef: BsModalRef;
  flag:boolean;
  url:string ="pageNo=1&pageSize=5";

  constructor(private modalService: BsModalService, private http: HttpClient,
     private route: ActivatedRoute, private router: Router,private alertService: SweetalertServiceService,private service: NumberservicesService) { 
    this.defaultIntialValue = this.numberFormat.value;
      this.route.queryParams.subscribe((params: any) => {
        if (params.data != undefined) {
          this.numberDefination.disable();
         this.getNumberType(params.data);
         this.typeId = params.data;
         this.numberFormat.controls['numberTypeId'].setValue(params.data);
        }
      });
  }
  ngOnInit(): void {
    // Get all number format defination
    this.service.getAllNumberFormat(this.typeId,this.url).subscribe((sucess:any)=>{
      this.headerList=sucess.headerlist  ;
      this.data=sucess.page;
    }, (error)=>{

    })
  }

  getNumberType(id){
    this.service.getnumberTypeID(id).subscribe((sucess: any) => {
      this.intialvalue = sucess;
      this.numberDefination.patchValue(sucess);
    }, error => {
      // alert("Error while updating the record");
    });
  }

  numberFormat = new FormGroup({
    'numberFormatId': new FormControl(),
    'numberTypeId': new FormControl(),
    'numberFormatLevelName': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'numberFormatDescription': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'numberFormatLength': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'numberFormatValueType': new FormControl('',[Validators.required, Validators.maxLength(30)]),
    'numberFormatDelimiter': new FormControl('None',Validators.required),
    'numberFormatLevelType': new FormControl('',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });

  numberDefination = new FormGroup({
    'numberTypeId' : new FormControl(''),
    'numberType' : new FormControl(''),
    'numberTypeDescription' : new FormControl('')
  });

  get getControl() {
    return this.numberFormat.controls;
  }
  get getnumberDefination() {
    return this.numberDefination.controls;
  }

  submit(){
    this.getControl['numberTypeId'].setValue(this.getnumberDefination['numberTypeId'].value);
    if(this.actionBtn != "Update"){
      this.service.postNumberFormat(this.numberFormat.value).subscribe((res:any)=>{
        this.modalRef.hide();
        if(res.statusCode == 23505){
          this.alertService.SelectRecord("Level Name already exist");
        }else{
          this.alertService.RecordAddedStatic();
        this.changePageSortSearch(this.url);
        this.resetForm();
        }
      },(error)=>{
        console.log(error);
      })
    } 
    else{
      this.service.updateLevelNameData(this.numberFormat.value).subscribe(()=>{
        this.modalRef.hide();
        this.alertService.RecordUpdatedStatic();
        this.changePageSortSearch(this.url);
      },(error)=>{console.log(error);
      })
    }
   
  }

  resetForm(){
    this.numberFormat.reset(this.actionBtn == "Save"? this.defaultIntialValue : this.intialvalue);
  }

  back(){

    this.router.navigate(['/number/numberFormatAll']);
    
  }

  changePageSortSearch(url:any){
    this.url = url;
    this.service.getAllNumberFormat(this.numberDefination.controls['numberTypeId'].value,url).subscribe((sucess:any)=>{
      this.data=sucess.page;
    }, (error)=>{})
  }
  buttonEvent1(data:any,template){
    if(data.event=='add'){
      this.actionBtn = "Save";
      this.numberFormat.reset(this.defaultIntialValue);
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));
    }
    else if(data.event=='edit'){
      this.actionBtn = "Update";
        this.service.getLevelNameData(data.data.numberFormatId).subscribe((response)=>{
          this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));
          this.numberFormat.patchValue(response);
          this.intialvalue = response;
        },(error)=>{console.log(error);
        })
    }
    else if(data.event == 'delete'){
    this.service.delLevelNameData(data.data.numberFormatId,JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe(()=>{
    this.alertService.recordDeleted();
      this.changePageSortSearch(this.url);
    },(error)=>{console.log(error);
    })
    } 
  }

}
