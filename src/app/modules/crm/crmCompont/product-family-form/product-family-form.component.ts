import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-product-family-form',
  templateUrl: './product-family-form.component.html',
  styleUrls: ['./product-family-form.component.scss','../../crm/crm.component.scss']
})
export class ProductFamilyFormComponent implements OnInit {
  @ViewChild('files') myInputVariable: any;
  productFamily = new FormGroup({
    'productFamilyId': new FormControl(''),
    'productFamily': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'productFamilyIcon': new FormControl(''),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId, Validators.required),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId, Validators.required),
  });
  intialvalue: any;
  actionBtn = "Save";
  productFamilyIcons: any;
  file: any;
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute) {
    this.intialvalue = this.productFamily.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
      }
    });
  }
  getValueByID(id) {
    this.service.getFamilly(id).subscribe((sucess: any) => {
      this.productFamily.patchValue(sucess);
      this.intialvalue = sucess;
      this.productFamily.patchValue(sucess);
      this.productFamilyIcons = sucess.productLineIcon;
      this.file=sucess.productLineIcon;
    }, error => {
      alert("Error while updating the record");
    });
  }
  ngOnInit(): void { }
  submit() {
   
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('productFamily', JSON.stringify(this.productFamily.value));
    if (this.actionBtn == "Update") {
      if(this.file!=undefined){
      this.service.putProductFamily(formData).subscribe(sucess => {
        this.alertService.RecordUpdated('/crm/product-family');
      });
    }else{
      this.service.updateProductFamilyWithoutFile(this.productFamily.value).subscribe(sucess => {
        this.alertService.RecordUpdated('/crm/product-family');
      });
    }
    } else {
      if(this.file!=undefined){
      this.service.createProductFamilly(formData).subscribe(sucess => {
        this.alertService.RecordAdded('/crm/product-family');
      })
    }else{
      alert("Please select File")
    }
    
    }
  }

  resetForm() {
    this.productFamily.reset(this.intialvalue);
  }
  get getControl() {
    return this.productFamily.controls;
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files.item(0);
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        this.productFamilyIcons = reader.result;
      }
    }
  }
}
