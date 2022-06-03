import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  numberScheme = new FormGroup({
    'schemeName': new FormControl('',[Validators.required,Validators.maxLength(20)]),
    'numberType': new FormControl('', [Validators.required,,Validators.maxLength(15),selectValidation]),
    'released': new FormControl('',[Validators.required]),
    'format': new FormControl('',[Validators.required,Validators.maxLength(30),Validators.minLength(3)]),
    'area': new FormControl('',[Validators.required]),
    'reuseAfterDisconnect': new FormControl('',[Validators.required]),
    'quarantinePeriod': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'quarantineUom': new FormControl('',[Validators.required]),
    'reservationPeriod': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn:string;
  numberTypes:any=[];
  url="pageNo=1&pageSize=5";
  
  constructor(private allService: NumberservicesService,private router: Router,private route: ActivatedRoute,private alertService: SweetalertServiceService) {
    this.intialvalue = this.numberScheme.value;
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
      this.numberScheme.patchValue(sucess);
      this.enableDisableArea();
     //this.onOptionsSelected(sucess.numberType);
    }, error => {
      // alert("Error while updating the record");
    });
  }
  submit() {
    this.numberScheme.controls['createdBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    this.numberScheme.controls['updatedBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    const formData = new FormData();
   // formData.append('file', this.file);
    formData.append('numberScheme', JSON.stringify(this.numberScheme.value));
    console.log(this.numberScheme);
    if (this.actionBtn == "Save") {
      this.allService.createNumberScheme(this.numberScheme.value).subscribe(
        (sucess: any) => {
          this.alertService.RecordAdded('/number/numberSchemeTable');
          this.resetForm();
        });
    } else {
      this.allService.updateNumberScheme(this.numberScheme.value).subscribe(
        (sucess: any) => {
          this.alertService.RecordUpdated('/number/numberSchemeTable');
          this.resetForm();
        });
    }
    
  
  }
  onOptionsSelected(optValue){
    console.log(optValue);
  }

  resetForm() {
    console.log(this.numberScheme);
    return false;
    this.numberScheme.reset(this.intialvalue);
    if(this.actionBtn == 'Save'){
     
    }
  }
  get getControl() {
    return this.numberScheme.controls;
  }

  back(){
    this.router.navigate(['/number/numberSchemeTable']);
  }

  enableDisableArea(){
   let numberTypeId = this.numberScheme.controls['numberType'].value;
   if(numberTypeId !=""){
     console.log(numberTypeId);
     console.log(this.numberTypes);
     let filteredArray = this.numberTypes.filter(function(itm){
       if(itm.numberTypeId == numberTypeId) {
         return itm;
       }
    });
    console.log(filteredArray);
    filteredArray[0].areaWiseSchemeDefinition ? this.numberScheme.controls['area'].enable() : this.numberScheme.controls['area'].disable();
   }
  }
    

}
