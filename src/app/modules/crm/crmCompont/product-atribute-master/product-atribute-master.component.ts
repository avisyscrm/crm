import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-atribute-master',
  templateUrl: './product-atribute-master.component.html',
  styleUrls: ['./product-atribute-master.component.scss']
})
export class ProductAtributeMasterComponent implements OnInit {

  label = "Update";
  msg="";
  intialValue: any;
  assignRole = new FormGroup({
    productAttributeId: new FormControl('', [Validators.required,Validators.maxLength(40)]),
    productAttributeName: new FormControl("",[Validators.required]),
    description: new FormControl('', [Validators.required]),
    dataType: new FormControl("",[Validators.required]),
    productAttributeLength: new FormControl('', [Validators.required]),
    dataCaptureControl: new FormControl("",[Validators.required]),
    defaultValue: new FormControl('', [Validators.required]),
    readOnly: new FormControl(false,[Validators.required]),
    visible: new FormControl(false, [Validators.required]),
    filterable: new FormControl(false,[Validators.required]),
    hasRule: new FormControl(false, [Validators.required]),
    hidden: new FormControl(false,[Validators.required]),
    required: new FormControl(false, [Validators.required]),
    runTimeConfigurable: new FormControl(false,[Validators.required]),
    assetizable: new FormControl(false, [Validators.required]),
    status: new FormControl(false,[Validators.required]),
    createdBy: new FormControl(-1),
    updatedBy: new FormControl(-1),
    isDeleted: new FormControl(false,[]),
  });
  statusCode: any;
  checkFlag: boolean;
  constructor(private crm:CrmservicesService,private alertService:SweetalertServiceService,
    private activatedRoute: ActivatedRoute ) {
      this.intialValue = this.assignRole.value;
      this.activatedRoute.queryParams.subscribe(params => {
        if (params.productAttributeId != undefined && params.productAttributeId != null) {
          this.label = "Update";
          this.checkFlag=true;
          this.crm.getProductAttributeById(params.productAttributeId).subscribe((sucess:any)=>{
           this.assignRole.patchValue(sucess);
           this.intialValue = sucess;
          });
        } else {
          this.label = "Add";
        }
      }); 

     }
  ngOnInit(): void {
  }

  get getControl(){
    return this.assignRole.controls;
  }

  submit(){
    if( this.label != "Update"){
      this.crm.putProductAtributeMaster(this.assignRole.value).subscribe((sucess:any)=>{
       if(sucess.statusCode==23505){
        this.alertService.SelectRecord("Product Attribute already exist");
       }else{
        this.alertService.RecordAdded('/crm/Product-Atribute-Summmary');
       }
       
      })
    }else{
      this.assignRole.removeControl("isDeleted");
      this.assignRole.removeControl("createdBy");
      this.assignRole.controls['updatedBy'].patchValue(-1);
      this.crm.updateProductAtributeMaster(this.assignRole.value).subscribe((sucess)=>{
        this.alertService.RecordUpdated('/crm/Product-Atribute-Summmary');
      })
    }
  }

  resetForm(){
    this.assignRole.reset(this.intialValue);
  }

  check(){
    this.crm.chceck(this.assignRole.controls['productAttributeId'].value).subscribe((scucess:any)=>{
      this.statusCode=scucess;
      this.msg=scucess.message;
      this.checkFlag=true;
    },error=>{
      if(error.status){
        this.checkFlag=false;
        this.msg=error.error.message;
      }
    });
  }
}
