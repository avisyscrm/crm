import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-productline-form',
  templateUrl: './productline-form.component.html',
  styleUrls: ['./productline-form.component.scss', '../../crm/crm.component.scss']
})
export class ProductlineFormComponent implements OnInit {
  @ViewChild('files') myInputVariable: any;
  productLine = new FormGroup({
    'productLineId': new FormControl(''),
    'productLine': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'productLineIcon': new FormControl('', Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";
  // productFamilyIcons: any;
  file: any;
  statusCode: any;
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute) {
    this.intialvalue = this.productLine.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
      }
    });
  }
  getValueByID(id) {
    this.service.getLineById(id).subscribe((sucess: any) => {
      this.productLine.patchValue(sucess);
      this.intialvalue = sucess;
      this.productLine.patchValue(sucess);
      // this.productFamilyIcons = sucess.productLineIcon;
    }, error => {
      // alert("Error while updating the record");
    });
  }
  ngOnInit(): void { }
  submit() {
    const formData = new FormData();
    this.productLine.controls['createdBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    this.productLine.controls['updatedBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    formData.append('file', this.file);
    formData.append('productLine', JSON.stringify(this.productLine.value));
    if (this.actionBtn == "Update") {
      if(this.file!=undefined){
        this.service.updateProductLineData(formData).subscribe(sucess => {
          this.alertService.RecordUpdated('/crm/product-line');
        });
      }else{
        this.service.updateProductLineDatawithoutFile(this.productLine.value).subscribe(sucess => {
          this.alertService.RecordUpdated('/crm/product-line');
        });
      }
    } else {
      if(this.file!=undefined){  
        this.service.addProductLineData(formData).subscribe(sucess => {
          this.alertService.RecordAdded('/crm/product-line');
        })
       } else{
        // alert("Please select File");
      }
      
    }
  
  }

  resetForm() {
    this.productLine.reset(this.intialvalue);
    this.myInputVariable.nativeElement.value = "";

    // if(this.actionBtn == 'Save'){
    //   this.file = '';
    //   this.productFamilyIcons = '';
    //   this.imageSet = true;
    // }
  }
  get getControl() {
    return this.productLine.controls;
  }

  // onFileSelect(event: any) {
  //   if (event.target.files.length > 0) {
  //     this.imageSet = false;
  //     this.file = event.target.files.item(0);
  //     var reader = new FileReader();
  //     reader.readAsDataURL(this.file);
  //     reader.onload = (_event) => {
  //       this.productFamilyIcons = reader.result;
  //     }
  //   }
  // }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files.item(0);
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        let imagePath=reader.result;
         this.productLine.controls['productLineIcon'].setValue(imagePath);
      }
    }
  }
}
