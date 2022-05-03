import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { selectValidation } from 'src/app/app/modules/client/validators/validation';
import { environment } from 'src/environments/environment';
import { AllservicesService } from '../../services/allservices.service';
import { selectValidation } from '../../validators/validation';

@Component({
  selector: 'app-product-attribute',
  templateUrl: './product-attribute.component.html',
  styleUrls: ['./product-attribute.component.scss']
})
export class ProductAttributeComponent implements OnInit {

  headerList:any=[];
  btnName:string = "Add"; 
  allProductEntityTempidd :any;
  tabid:any=[];
  data:any={};
  groupId!:string;
  attributeId: any;
  tempAttributeId!:any;
  sectionselected:any;
  secid:any;
  permission:any=[true,true,true];
  tabsvalue:any;
  selectedSection:any="";
  tempattributeforsort:any;
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;  
  httpClient: any;
  allSectionFromTabid: any;

  constructor( private http:HttpClient,private allService:AllservicesService, private router:Router, private service : AllservicesService, private route : ActivatedRoute) { }


  ngOnInit(): void {


    this.getTabsIds(1)
     // id of temp to attribute table 
     this.route.queryParams.subscribe((params:any)=>{
        this.tempAttributeId = params.data ;
        this.tempattributeforsort = params.data;
         this.productEntityAttribute.controls['productEntityTemplateId'].patchValue( this.tempAttributeId);
     })
  
     
     this.allService.getEntityTemplateAttributeidd1(-1 + "?pageNo=1&pageSize=5").subscribe(sucess=>{
       this.headerList=sucess.headerlist  ;   
       // this.data=sucess.page;
 
       },error=>{
         // alert(error);
       }
       );
 
 
     this.route.queryParams.subscribe((params)=>{
       this.attributeId = params.data;
       this.tempAttributeId = params.data;
       // this.temattributeforsort = params.data;
  
      //  console.log(this.tempAttributeId, 'sjdfjkhkhfkhkrfhkshdkahfkh');
       
     })
 
     //get all the value to update
     if(this.tempAttributeId != undefined){
         this.btnName = "Update";  
         this.service.getProdEntityTemplate(this.tempAttributeId).subscribe((resData)=>{
         console.log(resData,"id");
         if(resData){
           this.productEntityAttribute.patchValue(resData);
           this.onOptionsSelected(this.productEntityAttribute.controls['productEntityTemplateId'].value);
           
           }
       },
        (err)=>{
         alert("Something Went Wrong")
       })
     }
     
 
     this.service.allProductEntityTemp().subscribe((data)=>{
       this.allProductEntityTempidd =data;
     })
 
   }
 
   getDatataless( value:number){
     this.allService.getEntityTemplateAttributeidd1(value + "?pageNo=1&pageSize=5").subscribe(sucess=>{
       // this.headerList=sucess.headerlist  ;   
       this.data=sucess.page;
       
       },error=>{
         // alert(error);
       }
       );
   }
 
     productEntityAttribute = new FormGroup({
       productEntityTemplateId: new FormControl('',[ Validators.required, selectValidation]),
       productEntityTemplateAttributesId: new FormControl('', ),
       sequenceId: new FormControl('', Validators.required),
       productAttribute: new FormControl('', Validators.required),
       description: new FormControl('', Validators.required),
       productAttributeDataType:new FormControl('', Validators.required),
       productAttributeLength:new FormControl('', Validators.required),
       dataCaptureControl: new FormControl('', [Validators.required,selectValidation]),
       options: new FormControl(''),
       // attributeOptionValues: new FormControl(''),
       // value: new FormControl('d', Validators.required),
       mandatory: new FormControl('', [Validators.required, selectValidation]),
       editable: new FormControl('', [Validators.required,selectValidation]),
       sectionId: new FormControl('', [Validators.required, selectValidation]),
       tabId: new FormControl('', [Validators.required, selectValidation]),
       createdBy: new FormControl('-1', Validators.required),
       section : new FormControl(),
      
   })
 
   resetForm(){
     this.productEntityAttribute.controls['productEntityTemplateId'].setValue("");
     this.productEntityAttribute.controls['tabId'].setValue("");
     this.productEntityAttribute.controls['sectionId'].setValue("");
     this.productEntityAttribute.controls['mandatory'].setValue("");
     this.productEntityAttribute.controls['editable'].setValue("");
     this.productEntityAttribute.controls['productEntityTemplateId'].reset();
     this.productEntityAttribute.controls['sequenceId'].reset();
     this.productEntityAttribute.controls['productAttribute'].reset();
     this.productEntityAttribute.controls['description'].reset();
     this.productEntityAttribute.controls['productAttributeDataType'].reset();
     this.productEntityAttribute.controls['productAttributeLength'].reset();
     this.productEntityAttribute.controls['options'].setValue("");
   }
 
 
   onOptionsSelected(value:any){
     this.tempattributeforsort = value;
     console.log("the selected value is onOptionsSelected " + value);
     // this.temattributeforsort = value;
     this.getTabsIds(parseInt(value));
     this.getDatataless(value)
     // this.idtemp= this.getTabsIds(parseInt(value));
     } 
 
   getTabsIds(value:number){
    
     
      this.service.gettabId(value).subscribe((data) =>{
       this.tabid = data;     
     })
   }
  
   // get Section value 
   onSelectSection(sectionId:any){ 
     console.log(sectionId);
     console.log(JSON.stringify(this.secid));
     for(let i=0; i<this.secid.length; i++){
       // console.log(this.secid[i].productEntityTemplateSectionId);
       
       if(this.secid[i].productEntityTemplateSectionId == sectionId){
         console.log(this.secid[i].section);
         // this.selectedSection = this.secid[i].section;
         this.productEntityAttribute.controls['section'].setValue(this.secid[i].section);
       }
     }
   }
 
 // 
 onOptionsSelectedTab(value:any){
  // console.log(value+"pass1");
  
   this.getSectionIds(parseInt(value));
 }

  getSectionIds(value:number){
   this.service.getSectionFromTab(value).subscribe((data) =>{
    console.log(JSON.stringify(data.parentId)+"pass3");
      this.secid = data;
     console.log(this.secid);
   })
 } 
 
 
 async getSectionIdsAsync(tabId:number,resData:any){
  //  console.log(value + "pass2");
// 
// const promise = await this.http.get(environment.baseUrl+"/allSectionFromTab/"+value).toPromise();
this.http.get(environment.baseUrl+"/allSectionFromTab/"+tabId).toPromise().then(data => {
  console.log('First Promise resolved.')
  
  this.secid=data;
  
  // if (data.id > 5) {
  //   let anotherUrl = 'http://dummy.restapiexample.com/api/v1/employee/23';
  //   this.httpClient.get<Employee>(anotherUrl).toPromise().then(data => {
  //     this.conditionalPromiseResult = data;
  //     console.log('Second Promise resolved.')
  //   });
  // }
});
    // console.log(" --- " +JSON.stringify(promise[0]));  
    // promise.then((data)=>{
    //   console.log("Promise resolved with: " + JSON.stringify(data));
    // })
    //.catch((error)=>{
    //   console.log("Promise rejected with " + JSON.stringify(error));
    // });

// 

  
   let data:any;

  //  data = this.service.getSectionFromTab(value);
   console.log(JSON.stringify(data.data)+"test");
   
 }
   //add
   postProductAttribute(){
     this.service.postProductEntityAttribute(this.productEntityAttribute.value).subscribe((result)=>{
   
      console.log(result, 'posttttttt'); 

      this.onOptionsSelected(this.productEntityAttribute.controls['productEntityTemplateId'].value);
      

      alert("Record Added");
       // this.productEntityAttribute.reset();
       this.resetForm();
       this.onDelete(this.tempAttributeId )
      
       
      //  this.getDatataless(result.productEntityTemplateId)

     },(error)=>{
       console.log(error);
     })
   }  
 
   updateProductAttribute(){
     this.service.putProdEntityAttribute(this.productEntityAttribute.value).subscribe({
       next:(res)=>{
 
         alert("Updated Succesffuly");
           console.log(JSON.stringify(res.productEntityTemplateId)+"  updated code");
           this.resetForm();
       },  
       error:()=>{
         alert("error while updating record");
       }
     })
   }
 
   submitForm(){
     if(this.tempAttributeId){
       this.productEntityAttribute.valid ? this.updateProductAttribute() : "";
       // this.productEntityAttribute.reset();
     }
     else if(this.productEntityAttribute.valid){
         this.postProductAttribute();
       // this.productEntityAttribute.reset();
 
     }
   }
  
   onDelete(value:any){
     this.allService.getEntityTemplateAttributeidd1(value + "?pageNo="+this.pageNo+"&pageSize="+this.pageSize).subscribe(sucess=>{
       this.data=sucess.page;
       },error=>{
         // alert(error);
       }
       );
   }
 
  
 
   buttonEvent1(data:any){
     if(data.event=='add'){
       
      this.btnName = "Add";  
      this.resetForm();
      this.tempAttributeId= "";
      //  this.router.navigate(['product-attribute-form']);   
     }
     else if(data.event=='edit'){
       // alert(data.data)
       this.btnName = "Update";  

      //  this.getSectionIds(data.data.tabId);
       this.getSectionIdsAsync(data.data.tabId, data.data);
       this.productEntityAttribute.patchValue(data.data);
       console.log(data.data);
       
//       this.onOptionsSelectedTab(this.productEntityAttribute.controls['tabId'].value);
        
        console.log(this.productEntityAttribute.controls['tabId'].value, '23456yhnm');
  //      this.productEntityAttribute.controls['sectionId'].setValue(data.data.sectionId);
        
     }
     else if(data.event == 'delete'){
   
       this.allService.deleteProdEntityAttribute(data.data.productEntityTemplateAttributesId,data.data.updatedBy).subscribe((res)=>{
         console.log(res);
         alert("Record Deleted");
        this.onDelete(data.data.productEntityTemplateId);
        this.getDatataless(data.data.productEntityTemplateId);
       })
     }
     
     
       }
       
       dataTable(value:number){
         this.allService.getEntityTemplateAttributeidd1(value + "?pageNo=1&pageSize=5" ).subscribe(sucess=>{
           this.data=sucess.page;
           },error=>{}
           );
       }
 
 
     changePageSortSearch(url:any){
      this.ajayStri =""+ url.toString();
      var splittedpaging = this.ajayStri.split('&',4);
      this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
      this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
      this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
      this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);

       this.allService.getEntityTemplateAttributeidd1(this.tempattributeforsort+'?' +url ).subscribe(sucess=>{
         this.data=sucess.page;
         },error=>{}
         );
         console.log(url,'dattaaa')
     }
 
     getAttributeData(resData:any){
       this.getSectionIds(resData.sectionId);
     }
 
     //File Upload
 
     //
}
