import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';
// import {numberLessThan} from '../../../client/validators/validation'

@Component({
  selector: 'app-block-defination-form',
  templateUrl: './block-defination-form.component.html',
  styleUrls: ['./block-defination-form.component.scss','../../numberManagement.scss']
})
export class BlockDefinationFormComponent implements OnInit {
  intialvalue: any;
  actionBtn = "Save";
  start:any;
  end:any;
  result:any;
  schemeList:any;

  constructor(private router: Router,private route: ActivatedRoute,private allService:NumberservicesService,private alertService: SweetalertServiceService) { 
    this.intialvalue = this.blockdefine.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
        // this.blockdefine.addControl['numberSchemeId'].disable();
        // this.blockdefine.addControl['blockName'].disable();
      }
    });
  
  }


  ngOnInit(): void {
    this.allService.getAllNumberSchemes().subscribe(sucess=>{
      this.schemeList = sucess
      },error=>{
        console.log("Hello");
      }
      );

  }
  

  blockdefine = new FormGroup({
    'blockDefinitionId':new FormControl(''),
    'numberSchemeId':new FormControl('',Validators.required),
    'blockName': new FormControl('',[Validators.required,Validators.maxLength(30)]),
    'approvalDate': new FormControl((new Date()).toISOString().substring(0,10), [ Validators.maxLength(15)]),
    'startNumber': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'endNumber': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'totalCount': new FormControl('0',Validators.required),
    'status': new FormControl('Active',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  
  get getControl() {
    return this.blockdefine.controls;
  }

  getValueByID(id) {
    this.allService.getNumberSchemeBlockDetailData(id).subscribe((sucess: any) => {
      this.intialvalue = sucess;
      this.blockdefine.patchValue(sucess);
      
    }, error => {
      // alert("Error while updating the record");
    });
  }


  
  submit(){
    if(this.blockdefine.valid) {
      if(this.actionBtn == 'Save') {
        this.allService.postNumberScemeBlock(this.allService.removingSpace(this.blockdefine.getRawValue())).subscribe((res:any)=>{
          if(res.statusCode == 23505){
            this.alertService.SelectRecord("Block Name already exist");
          }else{
            this.alertService.RecordAdded('/number/blockDefinationTable');
          }
        },(error)=>{
          console.log(error);
        })
        return false;
      }
      if(this.actionBtn =='Update') {
        // console.log(this.blockdefine.getRawValue());
        
        // console.log(this.allService.removingSpace(this.blockdefine.getRawValue()));
        // return false;
        this.allService.updateNumberSchemeBlock(this.allService.removingSpace(this.blockdefine.getRawValue())).subscribe(
          (sucess: any) => {
            this.alertService.RecordUpdatedStatic();
            this.blockdefine.patchValue(sucess);
            this.intialvalue=this.blockdefine.value;
            this.getValueByID(sucess.blockDefinitionId);
          });
        
        return false;
      }
    }
    
  }

  resetForm(){
    this.blockdefine.reset(this.intialvalue); 
  }

  back(){
    this.router.navigate(['/number/blockDefinationTable']);
  }
  setTotalCount(){
    if(this.blockdefine.controls['startNumber'].value && this.blockdefine.controls['endNumber'].value) {
      this.blockdefine.controls['totalCount'].setValue(Math.abs(this.blockdefine.controls['endNumber'].value - this.blockdefine.controls['startNumber'].value));
      if(this.blockdefine.controls['startNumber'].value > this.blockdefine.controls['endNumber'].value) {
        this.blockdefine.controls['startNumber'].setErrors({'isGreater':true});
        this.blockdefine.updateValueAndValidity();
      } else {
        this.blockdefine.controls['startNumber'].setErrors(null);
        this.blockdefine.updateValueAndValidity();
      }
      
    }
    
  }

 

}
