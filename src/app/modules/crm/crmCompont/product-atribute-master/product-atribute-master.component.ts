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
    createdBy: new FormControl('-1', []),
    isDeleted: new FormControl(false,[]),
  });
  constructor(private crm:CrmservicesService,private alertService:SweetalertServiceService,
    private activatedRoute: ActivatedRoute ) {
      this.activatedRoute.queryParams.subscribe(params => {
        debugger
        if (params.productAttributeId != undefined && params.productAttributeId != null) {
          this.label = "Update";
          this.crm.getProductAttributeById(params.productAttributeId).subscribe((sucess:any)=>{
           this.assignRole.patchValue(sucess);
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
      this.crm.putProductAtributeMaster(this.assignRole.value).subscribe((sucess)=>{
        this.alertService.RecordAdded('/crm/Product-Atribute-Summmary');
      })
    }else{
      this.crm.updateProductAtributeMaster(this.assignRole.value).subscribe((sucess)=>{
        this.alertService.RecordUpdated('/crm/Product-Atribute-Summmary');
      })
    }
   
  }

  check(){
    this.crm.chceck(this.assignRole.controls['productAttributeId'].value).subscribe((scucess:any)=>{
      alert(scucess);
    });
  }

}
