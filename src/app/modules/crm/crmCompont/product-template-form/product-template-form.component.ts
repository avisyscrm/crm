import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { onlyChar, selectValidation } from '../../../client/validators/validation';
import { RecordUpdated, RecordAdded, } from '../../../client/sweetalert/sweetalert';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';



@Component({
  selector: 'app-product-template-form',
  templateUrl: './product-template-form.component.html',
  styleUrls: ['./product-template-form.component.scss','../../crm/crm.component.scss']
})
export class ProductTemplateFormComponent implements OnInit {
  intialvalue: any;
  productTemplate = new FormGroup({
    productEntityTemplateId:new FormControl(""),
    productEntityTemplateName:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    description:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    productHierarchyId:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    screenLayout:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    numberOfTabPagesSections:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    version:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    productEntityType:new FormControl("",[Validators.required, Validators.maxLength(30)]),
    state:new FormControl("",[Validators.required, Validators.maxLength(100)]),
    updatedBy:new FormControl(""),
    cretedBy:new FormControl("")
  });
  productEntityTypeList=[];
  productHierarchyIdList=[];
  actionBtn: string="Save";
  constructor(private service : CrmservicesService,  private alertService: SweetalertServiceService, 
    private router:Router, private route:ActivatedRoute) { 
      this.service.getHrichyList().subscribe((sucess:any)=>{
        this.productHierarchyIdList=sucess;
      });
      this.service.productEntityTypeList().subscribe((sucess:any)=>{
        this.productEntityTypeList=sucess;
      });
      this.intialvalue = this.productTemplate.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
      }
    });
    }
  ngOnInit(){}

  getValueByID(id){
this.service.productTemplate(id).subscribe((sucess:any)=>{
this.productTemplate.patchValue(sucess);
})
  }

  get getControl() {
    return this.productTemplate.controls;
  }

  submit(){
    if(this.actionBtn=="Save"){
      this.service.SaveProductTemplate(this.productTemplate.value).subscribe(
        (sucess:any)=>{
          this.router.navigate(['crm/product-template-form'], { queryParams: { data: JSON.stringify(sucess.productEntityTemplateId) } });
        });
    }else{
      this.service.updateProductTemplate(this.productTemplate.value).subscribe(
        (sucess:any)=>{

        });
    }
  }
}
