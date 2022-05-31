import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';

@Component({
  selector: 'app-number-type-form',
  templateUrl: './number-type-form.component.html',
  styleUrls: ['./number-type-form.component.scss','../../numberManagement.scss']
})
export class NumberTypeFormComponent implements OnInit {

  numberTypes = new FormGroup({
    'numberTypeId': new FormControl('',[Validators.required,Validators.maxLength(15)]),
    'numberType': new FormControl('', [Validators.required]),
    'numberTypeDescription': new FormControl('', [Validators.required, Validators.maxLength(255)]),
    'statusAfterGeneration': new FormControl('',Validators.required),
    'allocationAllowed': new FormControl(false,Validators.required),
    'areaWiseSchemeDefinition': new FormControl(false,Validators.required),
    'validFormat': new FormControl(false,Validators.required),
    'released': new FormControl(false,Validators.required),
    'technologyGeneration': new FormControl('',[Validators.required,Validators.maxLength(2)]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });

  intialvalue: any;
  actionBtn = "Save";
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute, private http:HttpClient) {
      this.intialvalue = this.numberTypes.value;
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
    }, error => {
      // alert("Error while updating the record");
    });
  }

  submit() {
    if (this.actionBtn == "Save") {
      this.service.createNumberType(this.numberTypes.value).subscribe(
        (sucess: any) => {
          this.alertService.RecordAdded('/number/numberTypeTable');
          this.resetForm();
        });
    } else {
      this.service.updatenumberType(this.numberTypes.value).subscribe(
        (sucess: any) => {
          this.alertService.RecordUpdated('/number/numberTypeTable');
          this.resetForm();
        });
    }
  }

  resetForm() {
    this.numberTypes.reset(this.intialvalue);
  }
  get getControl() {
    return this.numberTypes.controls;
  }
  ngOnInit(): void { }


}
