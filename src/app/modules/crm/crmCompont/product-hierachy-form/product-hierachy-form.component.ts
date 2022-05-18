import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-hierachy-form',
  templateUrl: './product-hierachy-form.component.html',
  styleUrls: ['./product-hierachy-form.component.scss']
})
export class ProductHierachyFormComponent implements OnInit {
  productFamily = new FormGroup({
    'productHierarchyId': new FormControl(''),
    'productFamilyId': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'productLineId': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'entityGroupsId': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId, Validators.required),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId, Validators.required),
  });

  productFamilyList=[];
  productLine=[];
  productGroup=[];
  intialvalue: any;
  actionBtn = "Save";
  productFamilyIcons: any;
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute) {
this.service.allEntityGroups().subscribe((sucss:any)=>{
  this.productGroup=sucss;
});

this.service.getallProductFamily().subscribe((sucss:any)=>{
  this.productFamilyList=sucss;
});
this.service.getallProductLine().subscribe((sucss:any)=>{
  this.productLine=sucss;
});
    this.intialvalue = this.productFamily.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
      }
    });
  }
  getValueByID(id) {
    this.service.getproductHierarchybyId(id).subscribe((sucess: any) => {
      this.productFamily.patchValue(sucess);
      this.intialvalue = sucess;
      this.productFamily.patchValue(sucess);
   
     
    }, error => {
      alert("Error while updating the record");
    });
  }
  ngOnInit(): void { }
  submit() {
    if (this.actionBtn == "Update") {
      this.service.putProductHierachy(this.productFamily.value).subscribe(sucess => {
        this.alertService.RecordUpdated('/crm/product-hierachy');
      });
    }
     else {
      this.service.SaveProducrHIrechy(this.productFamily.value).subscribe(sucess => {
        this.alertService.RecordAdded('/crm/product-hierachy');
      });
    }
  }
  resetForm() {
    this.productFamily.reset(this.intialvalue);
  }
  get getControl() {
    return this.productFamily.controls;
  }
}
