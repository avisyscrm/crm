import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {numberLessThan} from '../../../client/validators/validation'

@Component({
  selector: 'app-block-defination-form',
  templateUrl: './block-defination-form.component.html',
  styleUrls: ['./block-defination-form.component.scss','../../numberManagement.scss']
})
export class BlockDefinationFormComponent implements OnInit,OnChanges {


  constructor(private router: Router) { 
    this.intialvalue = this.blockdefine.value;
  
  }


  ngOnInit(): void {
    alert()
    this.schemeList = [
      {"schemeId":1 , "schemeName": "scheme-1"},
      {"schemeId":2 , "schemeName": "scheme-2"},
      {"schemeId":3 , "schemeName": "scheme-3"},
    ]
    
  }
  ngOnChanges(){ 
    alert()
    console.log("Hello");
    
  }
  blockdefine = new FormGroup({
    'numberSchemeBlockId':new FormControl(''),
    'schemeName':new FormControl('',Validators.required),
    'blockName': new FormControl('',Validators.required),
    'approvalDate': new FormControl('', [ Validators.maxLength(15)]),
    'startNumber': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'endNumber': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'count': new FormControl('0',Validators.required),
    'status': new FormControl('',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";
  start:any;
  end:any;
  result:any;
  schemeList:any;
  get getControl() {
    return this.blockdefine.controls;
  }

  submit(){
    console.log(JSON.stringify(this.blockdefine.value));
    alert(JSON.stringify(this.blockdefine.value));
  }

  resetForm(){
    console.log(this.blockdefine);
    
    this.blockdefine.reset(this.intialvalue);
  }

  back(){
    this.router.navigate(['/number/blockDefinationTable']);
  }
  setTotalCount(){
    if(this.blockdefine.controls['startNumber'].value && this.blockdefine.controls['endNumber'].value) {
      this.blockdefine.controls['count'].setValue(this.blockdefine.controls['startNumber'].value - this.blockdefine.controls['endNumber'].value);
    }
    
  }

  

}
export function  MyAwesomeRangeValidator(fg: any) :ValidatorFn |any  {
  
  
  // const start = fg.get('startNumber').value;
  // const end = fg.get('endNumber').value;
  console.log(fg.value);

  return {}
//  return start !== null && end !== null && start < end 
//    ? null 
//    : { range: true };
};