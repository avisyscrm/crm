import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';

@Component({
  selector: 'app-number-scheme-form',
  templateUrl: './number-scheme-form.component.html',
  styleUrls: ['./number-scheme-form.component.scss','../../numberManagement.scss']
})
export class NumberSchemeFormComponent implements OnInit {
  permission:any=[false,true,false];
  headerList:any=[];
  data:any={};

  numberScheme = new FormGroup({
    'numberSchemeId': new FormControl(""),
    'numberSchemeName': new FormControl('',[Validators.required,Validators.maxLength(20)]),
    'numberType': new FormControl('', [Validators.required,,Validators.maxLength(15)]),
    'numberSchemeReleased': new FormControl(false,[Validators.required]),
    'numberSchemeFormat': new FormControl('',[Validators.required,Validators.maxLength(30)]),
    'numberSchemeArea': new FormControl('',[Validators.maxLength(30)]),
    'reuseAfterDisconnect': new FormControl(false,[Validators.required]),
    'quarantinePeriod': new FormControl(''),
    'quarantineUom': new FormControl('',[Validators.maxLength(30)]),
    'reservationPeriod': new FormControl(''),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });

  numberFormat = new FormGroup({
    'numberSchemeId': new FormControl(""),
    'numberSchemeLineId': new FormControl(),
    'lineSequenceId': new FormControl(),
    'lineLevelName': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'lineDescription': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'lineLevelType': new FormControl('',[Validators.required, Validators.maxLength(30)]),
    'lineLength': new FormControl('',[Validators.required, Validators.maxLength(30)]),
    'lineValueType':new FormControl('',[Validators.required]),
    'lineValue':new FormControl('',[Validators.required]),
    'lineDelimiter': new FormControl('None',[Validators.required, Validators.maxLength(30)]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn:string;
  numberTypes:any=[];
  numberTypeId!:number;
  modalRef: BsModalRef;
  url:string="pageNo=1&pageSize=5";
  defaultIntialValue:any
  
  constructor(private modalService: BsModalService,private allService: NumberservicesService,private router: Router,private route: ActivatedRoute,private alertService: SweetalertServiceService) {
    this.defaultIntialValue = this.numberFormat.value;
    this.actionBtn  = "Save";
  
    this.allService.getnumberTypes().subscribe(sucess=>{
      this.numberTypes  = sucess;
      },error=>{
      }
      );
      this.route.queryParams.subscribe((params: any) => {
        if (params.data != undefined) {
          this.actionBtn = "Update";
          this.getValueByID(params.data, true);
         
          // this.getValueByID(this.numberScheme.value, false);
        }
      });
   }

  ngOnInit(): void {
    this.enableDisableArea();
  }

  getValueByID(id, flag) {
    this.allService.getnumberSchemeDetails(id).subscribe((sucess: any) => {
      this.intialvalue = sucess;
      this.numberTypeId = sucess.numberType;
      this.numberScheme.patchValue(sucess);
   
      this.changePageSortSearch(this.url, flag);
    }, error => {
      // alert("Error while updating the record");
    });
  }


  changePageSortSearch(url:any, flag){
    this.url = url;
    this.allService.getNumberSchemeFormat(this.numberScheme.value,url).subscribe((sucess:any)=>{
      this.data=sucess.page;
      if (flag) {
        this.headerList = sucess.headerlist;
      }
    }, (error)=>{})
  }

  buttonEvent1(data:any,template){
    console.log(data);
    
    if(data.event=='add'){
      this.actionBtn = "Save";
      this.numberFormat.reset(this.defaultIntialValue);
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));
    }
    else if(data.event=='edit'){
      this.actionBtn = "Update";
        this.allService.getNumberSchemeLineDetailData(data.data.numberSchemeLineId).subscribe((response)=>{
          this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));
          
         this.numberFormat.patchValue(response);
         this.intialvalue = response;
        },(error)=>{console.log(error);
        })
    } 
    
  }
  get getnumberFormatControl() {
    return this.numberFormat.controls;
    
  }

  get getnumberSchemeControl() {
    return this.numberScheme.controls;
  }

  numberSchemeSubmit() {
    if(this.numberScheme.valid) {
      if (this.actionBtn == "Save") {
        this.allService.postNumberSceme(this.allService.removingSpace(this.numberScheme.getRawValue())).subscribe((res:any)=>{
          if(res.statusCode == 23505){
            this.alertService.SelectRecord("Scheme Name already exist");
          }else{
            this.alertService.RecordAdded('/number/numberSchemeTable');
          }
        },(error)=>{
          console.log(error);
        })
        return false;
    }
    if (this.actionBtn == "Update") {
      this.allService.updateNumberScheme(this.numberScheme.getRawValue()).subscribe(
        (sucess: any) => {
          this.alertService.RecordUpdatedStatic();
          this.numberScheme.patchValue(sucess);
          this.intialvalue=this.numberScheme.value;
          this.getValueByID(sucess.numberSchemeId, false);
        });
      return false;
    }
    }
      
  }

  numberFormatSubmit(){
    if(this.numberFormat.valid) {
      this.allService.updateNumberSchemeLineDetailData(this.allService.removingSpace(this.numberFormat.value)).subscribe(()=>{
        this.modalRef.hide();
        this.alertService.RecordUpdatedStatic();
        this.changePageSortSearch(this.url, false);
      },(error)=>{console.log(error);
      })
    }
  }



  resetForm(formName:string) {
    if(formName == 'format') {
      this.numberFormat.reset(this.actionBtn == "Save"? this.defaultIntialValue : this.intialvalue);
    }
    if(formName == 'scheme') {
      this.numberScheme.reset(this.intialvalue);
    }  
    return false;
  }
  
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

  back(){
    this.router.navigate(['/number/numberSchemeTable']);
  }

  enableDisableArea(){
   
   let numberTypeId = this.numberScheme.controls['numberType'].value;
   if(numberTypeId !=""){
     let filteredArray = this.numberTypes.filter(function(itm){
       if(itm.numberTypeId == numberTypeId) {
         return itm;
       }
    });
    let areaControl = null;
    areaControl = this.numberScheme.get('numberSchemeArea');
    this.numberScheme.controls['numberSchemeArea'].setValue(""); 
    /** if areaWiseSchemeDefinition is active then  numberSchemeArea active/required & reservationPeriod  else disable */
    if(filteredArray[0].areaWiseSchemeDefinition){
      areaControl.enable();
      areaControl.setValidators([Validators.required]);
      areaControl.updateValueAndValidity();
    } else {
      areaControl.disable()
      areaControl.setValidators(null);
      areaControl.updateValueAndValidity();
    }
    /** if numberType ==  MSISDN then numberSchemeArea input active else disable */
    filteredArray[0].numberType == 'MSISDN' ? this.numberScheme.controls['reservationPeriod'].enable(): this.numberScheme.controls['reservationPeriod'].disable();
   }
  }
    

}
