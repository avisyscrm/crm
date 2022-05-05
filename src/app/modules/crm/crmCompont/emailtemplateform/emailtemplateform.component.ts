import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emailtemplateform',
  templateUrl: './emailtemplateform.component.html',
  styleUrls: ['./emailtemplateform.component.scss']
})
export class EmailtemplateformComponent implements OnInit {
  public Editor = ClassicEditor;
  actionBtn:string = "Save";
  data:any={};
  parameter:any;
  constructor(private allService:CrmservicesService, private router:Router, private route:ActivatedRoute ) 
  { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params :any)=>{
      this.parameter = params.data;
      console.log("test"+this.parameter);
      
     }) 

     if(this.parameter!=undefined){
        this.actionBtn = "Update"
        this.allService.getEmailTemplateId(this.parameter).subscribe((response)=>{
          this.emailTemplate.patchValue(response);
        })
     }
  }

  updateEmailTemplate(){
    this.allService.updateEmailTemplateId(this.emailTemplate.value).subscribe((res)=>{
      // alert("Record Updated");
      this.sweettalert7();
      this.router.navigate(['/crm/emailTemplate'])
    },
    (error)=>{
      console.log(error);
    })
  }

  postEmailTemplate(){
    this.allService.postEmailTemplate(this.emailTemplate.value).subscribe((response)=>{
      // alert('Record Added');
      this.sweettalert9();
      this.router.navigate(['/crm/emailTemplate'])
    },
    (error)=>{
      console.log(error);
    })
  }

  emailTemplate= new FormGroup({
    emailTemplateId : new FormControl(''),
    emailTemplateName : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    emailTemplateSubject: new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    emailTemplateContent : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    createdBy : new FormControl('-1'),
    updatedBy : new FormControl('-1'),
  })

  submit(){

    if(this.parameter!=undefined){
      this.updateEmailTemplate();
    }
    else{
      this.postEmailTemplate();
    }
 
  }

  resetForm(){
    this.emailTemplate.controls['emailTemplateName'].reset();
    this.emailTemplate.controls['emailTemplateContent'].reset();
    this.emailTemplate.controls['emailTemplateSubject'].reset();
  }

  get emailTemplateName(){
    return this.emailTemplate.get('emailTemplateName');
  }

  get emailTemplateSubject(){
    return this.emailTemplate.get('emailTemplateSubject');
  } 
  
  get emailTemplateContent(){
    return this.emailTemplate.get('emailTemplateContent');
  }

   // update
 sweettalert7() {
  Swal.fire({
    title: 'Updated',
    text: 'You data is updated!',
    icon: 'success',
    cancelButtonText: 'Ok',
  })
}

// add
sweettalert9() {
  Swal.fire({
    title: 'Success',
    text: 'Record Added successfully',
    icon: 'success',
    cancelButtonText: 'Ok',
  })
}

}
