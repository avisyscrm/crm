import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-product-family-form',
  templateUrl: './product-family-form.component.html',
  styleUrls: ['./product-family-form.component.scss', '../../crm/crm.component.scss']
})
export class ProductFamilyFormComponent implements OnInit {
  @ViewChild('file1') myInputVariable: ElementRef;
  productFamily = new FormGroup({
    'productFamilyId': new FormControl(''),
    'productFamily': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(400)]),
    'productFamilyIcon': new FormControl('', Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";
  file: any;
  statusCode: any;
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute, private router:Router) {
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
      this.intialvalue = sucess;
      this.productFamily.patchValue(sucess);
    }, error => {
      alert("Error while updating the record");
    });
  }
  ngOnInit(): void { }
  submit() {
    this.productFamily.controls['createdBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    this.productFamily.controls['updatedBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('productFamily', JSON.stringify(this.productFamily.value));
    if (this.actionBtn == "Update") {
      if (this.file != undefined) {
        this.service.putProductFamily(formData).subscribe(sucess => {
          this.alertService.RecordUpdated('/crm/product-family');
        });
      }
       else {
        this.service.updateProductFamilyWithoutFile(this.productFamily.value).subscribe(sucess => {
          this.alertService.RecordUpdated('/crm/product-family');
        });
      }
    } else {
      if (this.file != undefined) {
        this.service.createProductFamilly(formData).subscribe((sucess: any) => {
          if (sucess.statusCode == 23505) {
            this.alertService.SelectRecord("Product Family already exist");
          } else {
            this.alertService.RecordAdded('/crm/product-family');
          }
        })
      } else {
        alert("Please select File")
      }
    }
  }

  resetForm() {
    this.productFamily.reset(this.intialvalue);
    this.myInputVariable.nativeElement.value = "";
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
        let imagePath = reader.result;
        this.productFamily.controls['productFamilyIcon'].setValue(imagePath);
      }
    }
  }

  back(){
    this.router.navigate(['/crm/product-family'])
  }
}
