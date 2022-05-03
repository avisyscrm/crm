import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { onlyChar, selectValidation } from '../../../client/validators/validation';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss','../../crm/crm.component.scss']
})
export class EntityFormComponent implements OnInit {

  @ViewChild('file') myFileInput:any;
  groupbutton:string = "Save";
  groupId!:string;
  productLineList:any;
  productfamIDslist:any=[];
  prodLineid:any=[];
  file:any;
  data: any;
  entityGroupsIcon:any;
  constructor( private services: CrmservicesService, private router:Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      this.groupId = params.data;
      console.log(this.groupId);
    })

    if(this.groupId){
      this.groupbutton = "Update";
        this.services.getentitygroupId(this.groupId).subscribe((res)=>{
          console.log(res.entityGroupsId,"test");
          if(res){
            this.entityGroup.patchValue(res);
            this.LineFromProductFamily(this.entityGroup.controls['productFamilyId'].value);
            this.entityGroupsIcon=res.entityGroupsIcon;
            this.myFileInput.nativeElement.value = res.entityGroupsIcon;
            this.entityGroupsIcon = this.data.productLineIcon;
           
          }    
        })
      
    }
    this.services.productFamilyIDs().subscribe((data:any)=>{
      this.productfamIDslist = data;
      
    })
  }
  LineFromProductFamily(value:any) { 
    if(value!=undefined && value!=null && value!=""){
      this.services.allProductLineFromProductFamilyDropDown(value).subscribe(sucess=>{
        this.prodLineid=sucess;
        });
    }
  }

  entityGroup = new FormGroup ({
    productFamilyId: new FormControl ('', selectValidation),
    productLineId : new FormControl ('', selectValidation ),
    entityGroupsId : new FormControl ('' ),
    entityGroups : new FormControl ('' ,[Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]),
    description : new FormControl ('' , [Validators.required, Validators.maxLength(400), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    entityGroupsIcon : new FormControl (''),
      createdBy : new FormControl ('-1' , Validators.required),
     updatedBy : new FormControl ('1' , Validators.required),   
  });

  resetForm(){
    this.entityGroup.controls['productFamilyId'].setValue("");
    this.entityGroup.controls['productLineId'].setValue("");
    this.entityGroup.controls['entityGroups'].reset();
    this.entityGroup.controls['description'].reset();
    this.entityGroupsIcon = '';
  }

  //Add new groupn
  // existing call 
  postEntityGroup(){
    this.services.postEntityGroup(this.entityGroup.value).subscribe((result)=>{
      console.log('data', result);
      alert('Record Added');  
      this.entityGroup.reset();
    }) 
  }

  updateEntityGroup(){
    const formData = new FormData();
    formData.append('file',this.file);
    formData.append('entityGroups',JSON.stringify(this.entityGroup.value));
    console.log(this.entityGroup.value);
    
    this.services.putEntityGroup(formData).subscribe((res)=>{
      console.log(res);
      alert('Record Updated');
      this.router.navigate(['crm/entity-groups']); 
      // this.entityGroup.reset();
      this.resetForm();
    }, error =>{
      console.log(error);
     
      
    })
  }

  //form submit

  formSubmit(){
    if(this.groupId){
      this.entityGroup.valid? this.updateEntityGroup() : "";
      // this.entityGroup.reset();
    }

    else if(this.entityGroup.valid){

    const formData = new FormData();
    formData.append('file',this.file);
    formData.append('entityGroups',JSON.stringify(this.entityGroup.value));
     
    this.services.entityGroupsPost(formData).subscribe(sucess=>{
     alert('Record Added');  
    //  this.entityGroup.reset();
    this.resetForm();
    this.router.navigate(['crm/entity-groups']); 

    })
    // this.postEntityGroup();
    }
  }

  // getting id of prodline through prod family

  getprodLineId(value:number){
    if(value!=undefined && value!=null ){
      this.services.postEntityGroupnew(value).subscribe((data) =>{
        this.prodLineid = data;
        console.log(this.prodLineid, 'tabs');   
      })
    }
  }


  onFileSelect(event:any){
    
    if(event.target.files.length > 0) {
      this.file = event.target.files.item(0);
      // alert("file"+this.file);
      var reader = new FileReader();
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.entityGroupsIcon = reader.result; 
      }
    }
  }


  get entityGroups(){
    return this.entityGroup.get('entityGroups');
  }

  get description(){
    return this.entityGroup.get('description');
  } 
  
  get entityGroupsIcons(){
    return this.entityGroup.get('entityGroupsIcon');
  }


}
