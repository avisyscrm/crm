import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-entity-type-from',
  templateUrl: './product-entity-type-from.component.html',
  styleUrls: ['./product-entity-type-from.component.scss', '../../crm/crm.component.scss']
})
export class ProductEntityTypeFromComponent implements OnInit {
  productFamily = new FormGroup({
    productEntityTypeId: new FormControl(''),
    productEntityType: new FormControl('', [Validators.required, Validators.maxLength(15)]),
    productEntityTypeDescription: new FormControl('', [Validators.required, Validators.maxLength(400), Validators.pattern('^[A-Za-z0-9? @%_]+$')]),
    launchable: new FormControl(false),
    createdBy: new FormControl(''),
    updatedBy: new FormControl(''),
  });
  intialvalue: any;
  actionBtn = "Save";
  productFamilyIcons: any;
  file: any;
  statusCode: any;
  checkFlag: boolean;
  msg: any;
  
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute, private router:Router) {
    this.intialvalue = this.productFamily.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.checkFlag=true;
        this.getValueByID(params.data);
      }
    });
  }
  getValueByID(id) {
    this.service.getProductEntityID(id).subscribe((sucess: any) => {
      this.productFamily.patchValue(sucess);
      this.intialvalue = sucess;
      this.productFamily.patchValue(sucess);
      this.productFamilyIcons = sucess.productLineIcon;
      this.file=sucess.productLineIcon;
    }, error => {

    });
  }
  ngOnInit(): void { }
  submit() {
    this.productFamily.controls['createdBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    this.productFamily.controls['updatedBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
   
    if (this.actionBtn == "Update") {
      this.service.putProductEntity(this.productFamily.value).subscribe(sucess => {
        this.alertService.RecordUpdated('/crm/crm/product-entity-type');
      });
    } else {
      this.service.createProductEntity(this.productFamily.value).subscribe((sucess:any) => {
        if (sucess.statusCode == 23505) {
          this.alertService.SelectRecord("Product Entity Type already exist");
        } else {
          this.alertService.RecordAdded('/crm/crm/product-entity-type');
        }
        // this.alertService.RecordAdded('/crm/product-entity-type');
      })    
    }
  }

  resetForm() {
    this.productFamily.reset(this.intialvalue);
  }
  get getControl() {
    return this.productFamily.controls;
  }

  back(){
    this.router.navigate(['/crm/crm/product-entity-type'])
  }
}
