import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { selectValidation } from 'src/app/modules/client/validators/validation';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';
import { NumberService } from '../../number-services/numberservices';

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
    'quarantinePeriod': new FormControl('',[Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'quarantineUom': new FormControl(''),
    'reservationPeriod': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn:string;
  numberTypes:any=[];
  url="pageNo=1&pageSize=5";
  constructor(private allService: NumberService,private router: Router) {
   
    this.allService.getnumberTypes().subscribe(sucess=>{
      this.numberTypes  = sucess;
      
      },error=>{
        console.log("getnumberType");
      }
      );  
    this.actionBtn  = "Save";
    console.log(this.actionBtn);
    this.numberTypes = [
      {name:"SIM"},
      {name:"IMSI"},
      {name:"MSISDN"},
    ]
   }

  ngOnInit(): void {
  }

  submit() {
    this.numberScheme.controls['createdBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    this.numberScheme.controls['updatedBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    const formData = new FormData();
   // formData.append('file', this.file);
    formData.append('numberScheme', JSON.stringify(this.numberScheme.value));
    console.log(this.numberScheme);
    
  
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
   let numberType = this.numberScheme.controls['numberType'].value;
   if(numberType !=""){
     console.log(numberType);
     var filteredArray = this.numberTypes.filter(function(itm){
      console.log(itm)
      console.log(numberType)
      return itm.numberTypeId == numberType ? true : "";
    });
    console.log(filteredArray)
   }
    
  }
    

}
