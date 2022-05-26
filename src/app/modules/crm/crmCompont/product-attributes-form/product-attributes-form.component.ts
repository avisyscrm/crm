import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { onlyChar, selectValidation } from '../../../client/validators/validation';
import { RecordUpdated, RecordAdded } from '../../../client/sweetalert/sweetalert';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';


@Component({
  selector: 'app-product-attributes-form',
  templateUrl: './product-attributes-form.component.html',
  styleUrls: ['./product-attributes-form.component.scss','../../crm/crm.component.scss']
})
export class ProductAttributesFormComponent  {
  headerList:any=[];
  btnName:string = "Save"; 
  allProductEntityTempidd :any=[];
  tabid:any=[];
  secid:any=[];

  productAttributeList:any=[];
  permission:any=[true,true,true];
  intialValue: any;
  isDetails: boolean;

  back(){
    this.router.navigate(['/crm/product-attribute'], { queryParams: 
      { 
        data:  this.productEntityAttribute.controls['productEntityTemplateId'].value,
        data1: this.productEntityAttribute.controls['sectionId'].value,
        data2:this.productEntityAttribute.controls['tabId'].value,
       
      }
    });
  }
  constructor(private router:Router, private service : CrmservicesService,private alertService: SweetalertServiceService,
     private route : ActivatedRoute,private sweetAlert: SweetalertServiceService) { 
      this.route.queryParams.subscribe((params:any)=>{
        this.productEntityAttribute.controls['productEntityTemplateId'].patchValue(params.templateId);
        this.productEntityAttribute.controls['sectionId'].patchValue(params.sectionId);
        this.productEntityAttribute.controls['tabId'].patchValue(params.tabId);
        
        this.isDetails=JSON.parse(params.isDetails);
        if(this.isDetails){
          this.productEntityAttribute.disable();
        }
        this.getTabsIds(params.templateId);
        this.getSectionIds(params.tabId);
        this.service.allProductEntityTemp().subscribe((sucess:any)=>{
          this.allProductEntityTempidd=sucess;
          this.service.getproductAttributeList().subscribe((sucess:any)=>{
            this.productAttributeList=sucess;
          }) 
          });
  if(params.productEntityTemplateId!=undefined){
    this.btnName='Update';
  this.getEditValue(params.productEntityTemplateId);
  }else{
    this.productEntityAttribute.controls['productEntityTemplateId'].patchValue(params.templateId);
    this.productEntityAttribute.controls['sectionId'].patchValue(params.sectionId);
    this.productEntityAttribute.controls['tabId'].patchValue(params.tabId);
    this.intialValue=this.productEntityAttribute.value;
  }
          
       });
     }

     onSelectSectionAdd(data){
      this.service.getProductAttributeById(data).subscribe((obj:any)=>{
        this.productEntityAttribute.controls['description'].patchValue(obj.description);
        this.productEntityAttribute.controls['mandatory'].patchValue(obj.required);
        this.productEntityAttribute.controls['productAttributeLength'].patchValue(obj.productAttributeLength);
        this.productEntityAttribute.controls['productAttributeDataType'].patchValue(obj.dataType);
        this.productEntityAttribute.controls['dataCaptureControl'].patchValue(obj.dataCaptureControl);
        this.productEntityAttribute.controls['options'].patchValue(obj.defaultValue);
        this.productEntityAttribute.controls['editable'].patchValue(obj.editable);
      });
    //  var obj= this.productAttributeList.find(o => o.productAttributeId === data);
    //  console.log(JSON.stringify(obj));
 
     
     
     
     }

  getEditValue(data) {
  this.service.getProductEntitytemplatesectionById(data).subscribe((sucess:any)=>{
    this.productEntityAttribute.patchValue(sucess);
    this.intialValue=this.productEntityAttribute.value;
    this.onSelectSectionAdd(sucess.productAttribute);
  })
  }
 
  
     productEntityAttribute = new FormGroup({
      productEntityTemplateId: new FormControl('',[ Validators.required, selectValidation]),
       productEntityTemplateAttributesId: new FormControl('', ),
       sequenceId: new FormControl('', Validators.required),
       productAttribute: new FormControl('', Validators.required),
       description: new FormControl('',[Validators.required, Validators.maxLength(400), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
       productAttributeDataType:new FormControl('', Validators.required),
       productAttributeLength:new FormControl('', Validators.required),
       dataCaptureControl: new FormControl('', [Validators.required,selectValidation]),
       options: new FormControl('',[Validators.required,selectValidation]),
       mandatory: new FormControl(false),
       readOnly: new FormControl(false),
       sectionId: new FormControl('', [Validators.required, selectValidation]),
       tabId: new FormControl('', [Validators.required, selectValidation]),
       createdBy: new FormControl('-1', Validators.required),
       section : new FormControl(),
      
   })
 
   resetForm(){
     this.productEntityAttribute.reset(this.intialValue);
   }
   onOptionsSelected(value:any){
     this.getTabsIds(parseInt(value));
     } 
 
   getTabsIds(value:number){
      this.service.gettabId(value).subscribe((data) =>{
       this.tabid = data;     
     })
   }
   onSelectSection(sectionId:any){ 
     console.log(sectionId);
     console.log(JSON.stringify(this.secid));
     for(let i=0; i<this.secid.length; i++){       
       if(this.secid[i].productEntityTemplateSectionId == sectionId){
         this.productEntityAttribute.controls['section'].setValue(this.secid[i].section);
       }
     }
   }

 onOptionsSelectedTab(value:any){  
   this.getSectionIds(parseInt(value));
 }
  getSectionIds(value:number){
   this.service.getSectionFromTab(value).subscribe((data) =>{
      this.secid = data;
   })
 } 

   submitForm(){
    if(this.btnName=='Save'){
this.service.postProductEntityAttribute(this.productEntityAttribute.value).subscribe((sucess:any)=>{
  this.sweetAlert.RecordAddedStatic();
  this.router.navigate(['/crm/product-attribute'], { queryParams: 
    { 
      data:  this.productEntityAttribute.controls['productEntityTemplateId'].value,
      data1: this.productEntityAttribute.controls['sectionId'].value,
      data2:this.productEntityAttribute.controls['tabId'].value,
     
    }
  });
});
    }else{
      this.service.putProdEntityAttribute(this.productEntityAttribute.value).subscribe((sucess:any)=>{
      this.alertService.RecordUpdatedStatic();

      this.router.navigate(['/crm/product-attribute'], { queryParams: 
        { 
          data:  this.productEntityAttribute.controls['productEntityTemplateId'].value,
          data1: this.productEntityAttribute.controls['sectionId'].value,
          data2:this.productEntityAttribute.controls['tabId'].value,
         
        }
      });
      //('/crm/product-attribute?data=2&data1=21&data2=13');
      });
    }
   
   }

     onDataCapture(dataCapture:string){
      if(dataCapture =='text' || dataCapture == 'date'){
       this.productEntityAttribute.controls['options'].disable();
     } else {
        this.productEntityAttribute.controls['options'].enable();
      }  
    }
   
}
