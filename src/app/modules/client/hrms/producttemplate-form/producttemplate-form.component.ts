import { AllservicesService } from './../../services/allservices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selectValidation } from '../../validators/validation';
//import { selectValidation } from 'src/app/app/modules/client/validators/validation';

@Component({
  selector: 'app-producttemplate-form',
  templateUrl: './producttemplate-form.component.html',
  styleUrls: ['./producttemplate-form.component.scss']
})
export class ProducttemplateFormComponent implements OnInit {

  getProductId:any;
  tempAttributeId!:number; 
  btnName:string = "Save";
  entityGroup:any;
  prodLineid:any;
  productfamIDslist:any;
  prodEntityid:any;
  

  constructor(private service : AllservicesService,  private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      // console.log(params.data);
      this.tempAttributeId = params.data;
      console.log(this.tempAttributeId,'iddd of attr') 
    })

     //get all the value to update
     if(this.tempAttributeId != undefined){
      // alert(this.tempAttributeId); 
      this.btnName = "Update";
      this.service.getProdEntityTemplate(this.tempAttributeId).subscribe((resData)=>{
        console.log(resData,"id");
        if(resData){ 
          console.log(resData.numberOfTabPagesSections)
        this.productEntity.patchValue(resData);
        this.onOptionsSelected(this.productEntity.controls['productFamilyId'].value);
        this.onOptionsSelectedEntity(this.productEntity.controls['productLineId'].value);
          }
      },
       (err)=>{
        alert(err)
      })
    }

    this.service.productFamilyIDs().subscribe((data:any)=>{
      this.productfamIDslist = data;
    })

   
    this.route.queryParams.subscribe((params)=>{
      console.log(params.data);
    });


   }

   // Form Control
   productEntity = new FormGroup({
    entityGroupsId:new FormControl('',selectValidation ),
      productEntityTemplateId: new FormControl(''),
      productEntityTemplateName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      productLineId: new FormControl('', [Validators.required, selectValidation]),
      version: new FormControl('',Validators.required),
      state: new FormControl('', [Validators.required, selectValidation]),
      createdBy: new FormControl('0', Validators.required),
      productFamilyId: new FormControl('',[ Validators.required, selectValidation])
   })
   //Form Control end

  //Reset Form 

   resetForm(){
    this.productEntity.controls['entityGroupsId'].setValue("");
    this.productEntity.controls['productFamilyId'].setValue("");
    this.productEntity.controls['productLineId'].setValue("");
    this.productEntity.controls['state'].setValue("");
    this.productEntity.controls['productEntityTemplateName'].reset();
    this.productEntity.controls['description'].reset();
    this.productEntity.controls['version'].reset();
   }

   //Add New Record
   postEntityTemplate(){
     console.log(this.productEntity.value,"post data");
     this.service.postprodEntityTemplate(this.productEntity.value).subscribe((res)=>{
        console.log(res);
        alert("Record Added");
        // this.productEntity.reset();
        this.resetForm();
        this.router.navigate(['hr-activities']); 
     },
     error=>console.log(error)
     )
   }


   updateProductentity(){
    this.service.putProdEntity(this.productEntity.value).subscribe({
      next:(res)=>{

        alert("updated succesffuly");
        // this.productEntity.reset();
        this.resetForm();
        this.router.navigate(['hr-activities']); 
      },
      error:()=>{
        alert("error while updating record");
      }
    })
  }

  submitForm(){
    if(this.tempAttributeId){
      
      this.productEntity.valid ? this.updateProductentity() : "";
      // this.productEntity.reset();
    }
    else if(this.productEntity.valid){
      // alert('add');
      // console.log(this.productEntity);
      this.postEntityTemplate();
      // this.productEntity.reset();
    }
  }

  // calling prod line from family id
  getprodLineId(value:number){
    this.service.postEntityGroupnew(value).subscribe((data) =>{
      this.prodLineid = data;
      console.log(this.prodLineid, 'prodline');
      
    })
  }
onOptionsSelected(value:string){
    console.log("the selected value is " + value);
    this.getprodLineId(parseInt(value));
}

// calling enity group from prod line

getEntityLineId(value:number){
  this.service.getEntityGroupnew(value).subscribe((data) =>{
    this.prodEntityid = data;
    console.log(this.prodEntityid, 'entity gr');
    
  })
}
onOptionsSelectedEntity(value:string){
  console.log("the selected value is " + value);
  this.getEntityLineId(parseInt(value));
}



}
