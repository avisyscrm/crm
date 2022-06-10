import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
  actionbtn1="Save";
  optionFrom = new FormGroup({
    key: new FormControl('', [Validators.required]),
    value: new FormControl("",[Validators.required]),
     productAttributeId: new FormControl(''),
     optionId: new FormControl(''),
    createdBy: new FormControl(-1),
    updatedBy: new FormControl(-1),
  }); 
  assignRole = new FormGroup({
    productAttributeId: new FormControl('', [Validators.required,Validators.maxLength(40)]),
    productAttributeName: new FormControl("",[Validators.required, Validators.maxLength(150)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(150)]),
    dataType: new FormControl("",[Validators.required, Validators.maxLength(15)]),
    productAttributeLength: new FormControl(''),
    dataCaptureControl: new FormControl("",[Validators.required]),
    defaultValue: new FormControl(''),
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
  modalRef: BsModalRef;
   url="pageNo=1&pageSize=5";
  defultIntialValue: any;
  IntialValue: any;
  constructor(private crm:CrmservicesService,private alertService:SweetalertServiceService,
    private modalService: BsModalService, private router: Router,
    private activatedRoute: ActivatedRoute ) {  
      this.defultIntialValue=this.optionFrom.value;
      this.intialValue = this.assignRole.value;
      this.activatedRoute.queryParams.subscribe(params => {
        if (params.data != undefined && params.data != null) {
          this.label = "Update";
          this.checkFlag=true;
          this.crm.getProductAttributeById(params.data).subscribe((sucess:any)=>{
           this.assignRole.patchValue(sucess);
           this.intialValue = sucess;
          });
        } else {
          this.label = "Save";
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
      this.crm.putProductAtributeMaster(this.assignRole.getRawValue()).subscribe((sucess:any)=>{
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
      this.crm.updateProductAtributeMaster(this.assignRole.getRawValue()).subscribe((sucess)=>{
        this.alertService.RecordUpdated('/crm/Product-Atribute-Summmary');
      })
    }
  }
  option(template){
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    this.changePageSortSearch(this.url,true);
    this.actionbtn1='Save';
    this.reset();

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
  permission=[true,true,true];
  reset(){
    if( this.actionbtn1=='Save'){
      this.optionFrom.reset(this.defultIntialValue);
    }else{
      this.optionFrom.reset(this.IntialValue);
    }
  }

  buttonEvent1(data){
    
    if(data.event=='add'){
     this.actionbtn1="Save";
       this.reset();
    }
    else if(data.event=='edit'){
      this.actionbtn1='Update';
   this.crm.getOptionById(data.data.optionId).subscribe((sucess:any)=>{
     this.optionFrom.patchValue(sucess);
     this.IntialValue=sucess;
   });
    }
    else if(data.event == 'delete'){
      this.crm.deleteOptionById(data.data.optionId,"dsd").subscribe((sucess:any)=>{
      this.changePageSortSearch(this.url,false);
      this.alertService.recordDeleted();
      });
    }
  }
  changePageSortSearch(url,flag){
    this.url=url;
this.crm.getOptioDataTable(this.assignRole.controls['productAttributeId'].value,url).subscribe((sucess:any)=>{
  this.data=sucess.page;
  if(flag && this.headerList.length==0){
    this.headerList=sucess.headerlist;
  }
 
})
  }
  headerList=[];
  data=[];
  actionbtn1submit(){
    this.optionFrom.controls['productAttributeId'].patchValue(this.assignRole.controls['productAttributeId'].value)
    if(this.actionbtn1=='Save'){
   this.crm.saveOption(this.optionFrom.value).subscribe((sucess:any)=>{
  this.alertService.RecordAddedStatic();
     this.changePageSortSearch(this.url,false);
     this.optionFrom.patchValue(sucess);
     this.actionbtn1="Save";
     this.IntialValue=sucess;
     this.reset();
   })
    }else{
      this.crm.updateOption(this.optionFrom.value).subscribe((sucess:any)=>{
        
        // this.alertService.RecordAddedStatic();
      this.alertService.RecordUpdatedStatic();
      // this.optionFrom.patchValue(this.defultIntialValue);
      this.changePageSortSearch(this.url,false);
      this.IntialValue=this.defultIntialValue;
      this.reset();
      })
      
    }
  }

  back(){
    this.router.navigate(["/crm/Product-Atribute-Summmary"]);
  }

  onSelect(){
    this.assignRole.controls['dataCaptureControl'].patchValue(this.assignRole.controls['dataType'].value == 'date'? 'date':this.assignRole.controls['dataCaptureControl'].value)
  }
  
}
