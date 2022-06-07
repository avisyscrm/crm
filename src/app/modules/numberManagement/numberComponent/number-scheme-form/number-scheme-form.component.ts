import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { selectValidation } from 'src/app/modules/client/validators/validation';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';
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
    'numberSchemeName': new FormControl('',[Validators.required,Validators.maxLength(20)]),
    'numberSchemeType': new FormControl('', [Validators.required,,Validators.maxLength(15),selectValidation]),
    'numberSchemeReleased': new FormControl('',[Validators.required]),
    'numberSchemeFormat': new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]),
    'numberSchemeArea': new FormControl('',[Validators.required]),
    'reuseAfterDisconnect': new FormControl('',[Validators.required]),
    'quarantinePeriod': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'quarantineUom': new FormControl('',[Validators.required]),
    'reservationPeriod': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });

  numberFormat = new FormGroup({
    'numberFormatId': new FormControl(),
    'numberTypeId': new FormControl(),
    'numberFormatLevelName': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'numberFormatDescription': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'numberFormatLength': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'numberFormatValueType': new FormControl('',[Validators.required, Validators.maxLength(30)]),
    'numberFormatDelimiter': new FormControl('None',Validators.required),
    'numberFormatLevelType': new FormControl('',Validators.required),
    'numberForamatValue':new FormControl('',[Validators.required]),
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
          this.getValueByID(params.data);
        }
      });
   }

  ngOnInit(): void {

  }

  getValueByID(id) {
    this.allService.getnumberSchemeDetails(id).subscribe((sucess: any) => {
      this.intialvalue = sucess;
      this.numberTypeId = sucess.numberType;
      this.numberScheme.patchValue(sucess);
      
      // this.enableDisableArea();
      this.getNumberFormats()
     //this.onOptionsSelected(sucess.numberType);
    }, error => {
      // alert("Error while updating the record");
    });
  }

  getNumberFormats(){
    this.numberTypeId = 15;
    this.allService.getAllNumberFormat(this.numberTypeId,this.url).subscribe((sucess:any)=>{
      this.headerList=sucess.headerlist;
      this.data=sucess.page;
    }, (error)=>{

    })
  }

  changePageSortSearch(url:any){
    this.url = url;
    this.allService.getAllNumberFormat(this.numberScheme.controls['numberSchemeType'].value,url).subscribe((sucess:any)=>{
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
        this.allService.getLevelNameData(data.data.numberFormatId).subscribe((response)=>{
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

  submit(formName:string) {
    console.log(formName);
    
    if(formName == 'scheme') {
    //  console.log(this.getnumberSchemeControl);
      this.allService.postNumberSceme(this.numberScheme.value).subscribe((res:any)=>{
        if(res.statusCode == 23505){
          this.alertService.SelectRecord("Scheme Name already exist");
        }else{
          this.resetForm(formName);
          this.alertService.RecordAdded('/number/numberSchemeTable');
        }
      },(error)=>{
        console.log(error);
      })

      return false;
    }
    if(formName == 'format') {
      // console.log(this.numberFormat.value);
      // return false;
     // this.getnumberFormatControl['numberTypeId'].setValue(this.getnumberSchemeControl['numberType'].value);
      this.allService.updateLevelNameData(this.numberFormat.value).subscribe(()=>{
        this.modalRef.hide();
        this.alertService.RecordUpdatedStatic();
        this.changePageSortSearch(this.url);
      },(error)=>{console.log(error);
      })
    }
    
   
  
  }
  onOptionsSelected(optValue){
  //  console.log(optValue);
  }

  resetForm(formName:string) {
    if(formName == 'format') {
      this.numberFormat.reset(this.actionBtn == "Save"? this.defaultIntialValue : this.intialvalue);
    }
    if(formName == 'scheme') {
      this.numberScheme.reset(this.actionBtn == "Save"? this.defaultIntialValue : this.intialvalue);
    }  
  //  console.log(this.numberScheme);
    return false;
    this.numberScheme.reset(this.intialvalue);
    if(this.actionBtn == 'Save'){
     
    }
  }
  

  back(){
    this.router.navigate(['/number/numberSchemeTable']);
  }

  enableDisableArea(){
  //  let numberTypeId = this.numberScheme.controls['numberType'].value;
  //  if(numberTypeId !=""){
  //   // console.log(numberTypeId);
  //  //  console.log(this.numberTypes);
  //    let filteredArray = this.numberTypes.filter(function(itm){
  //      if(itm.numberTypeId == numberTypeId) {
  //        return itm;
  //      }
  //   });
  //  // console.log(filteredArray);
  //   filteredArray[0].areaWiseSchemeDefinition ? this.numberScheme.controls['area'].enable() : this.numberScheme.controls['area'].disable();
  //  }
  }
    

}
