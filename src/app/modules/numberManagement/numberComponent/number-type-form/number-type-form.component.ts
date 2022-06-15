import { NumberservicesService } from './../../numberServices/numberservices.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';

@Component({
  selector: 'app-number-type-form',
  templateUrl: './number-type-form.component.html',
  styleUrls: ['./number-type-form.component.scss','../../numberManagement.scss']
})
export class NumberTypeFormComponent implements OnInit {

  numberTypes = new FormGroup({
    'numberTypeId': new FormControl('',[Validators.required,Validators.maxLength(15)]),
    'numberType': new FormControl('others', [Validators.required,Validators.maxLength(30)]),
    'numberTypeDescription': new FormControl('', [Validators.required, Validators.maxLength(400), Validators.pattern('^[A-Za-z0-9? @%_]+$')]),
    'statusAfterGeneration': new FormControl('',[Validators.required,Validators.maxLength(30)]),
    'allocationAllowed': new FormControl(false,Validators.required),
    'areaWiseSchemeDefinition': new FormControl(false,Validators.required),
    'validFormat': new FormControl(false,Validators.required),
    'released': new FormControl(false,Validators.required),
    'technologyGeneration': new FormControl(''),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });

  intialvalue: any;
  actionBtn = "Save";
  constructor(private service: NumberservicesService, private router: Router,
    private alertService: SweetalertServiceService, private route: ActivatedRoute,
     private http:HttpClient) {
      this.intialvalue = this.numberTypes.value;
      this.numberTypes.controls['technologyGeneration'].disable();
      this.route.queryParams.subscribe((params: any) => {
        if (params.data != undefined) {
          this.actionBtn = "Update";
          this.getValueByID(params.data);
        }
      });
  }

  getValueByID(id) {
    this.service.getnumberTypeID(id).subscribe((sucess: any) => {
      this.intialvalue = sucess;
      this.numberTypes.patchValue(sucess);
      this.onOptionsSelected(sucess.numberType);
    }, error => {
      // alert("Error while updating the record");
    });
  }

  submit() {
    if( this.numberTypes.valid){
      if (this.actionBtn == "Save") {
        this.service.createNumberType(this.service.removingSpace(this.numberTypes.value)).subscribe(
          (sucess: any) => {
            if(sucess.statusCode == 23505){
              this.alertService.SelectRecord("Number Type Id already exist");
            }else{
              this.alertService.RecordAdded('/number/number/numberTypeTable');
            }
          });
      } else {
        this.service.updatenumberType(this.service.removingSpace(this.numberTypes.value)).subscribe(
          (sucess: any) => {
            this.alertService.RecordUpdated('/number/number/numberTypeTable');
          });
      }
    }
    
  }

  resetForm() {
    this.numberTypes.reset(this.intialvalue);
  }
  get getControl() {
    return this.numberTypes.controls;
  }
  ngOnInit(): void { }

  onOptionsSelected(optValue){
    this.numberTypes.controls['technologyGeneration'].setValue("");
    if(optValue == "IMSI"){
      this.numberTypes.controls['technologyGeneration'].enable();
    }else{
      this.numberTypes.controls['technologyGeneration'].disable();
    }
  }

  back(){
    this.router.navigate(['number/number/numberTypeTable']);
  }

  enableDisableAllocationAllowed(){
    let statusAfterGeneration = this.numberTypes.controls['statusAfterGeneration'].value;
    if(statusAfterGeneration != "") {
      let allocationAllowedControl = null;
      allocationAllowedControl = this.numberTypes.get('allocationAllowed');
      if(statusAfterGeneration == "not-available") {
        allocationAllowedControl.disable();
        allocationAllowedControl.setValue(false);
      } else {
        allocationAllowedControl.enable();
      }
    }
  }
}
