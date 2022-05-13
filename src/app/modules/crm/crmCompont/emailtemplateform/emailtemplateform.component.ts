import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { emailTemplatevariableValidation } from 'src/app/modules/client/validators/validation';
import { RecordUpdated, RecordAdded } from '../../../client/sweetalert/sweetalert';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-emailtemplateform',
  templateUrl: './emailtemplateform.component.html',
  styleUrls: ['./emailtemplateform.component.scss','../../crm/crm.component.scss']
})

export class EmailtemplateformComponent implements OnInit {
  public Editor = ClassicEditor;
  actionBtn:string = "Save";
  data:any={};
  parameter:any;
  templateVariables:any=[];
  isEmailTemplateVariableInValid:boolean = false;
  constructor(private allService:CrmservicesService, private router:Router, private route:ActivatedRoute ) 
  {}

  @ViewChild('ckeditorEleRef') ckeditorElementComponent:CKEditorComponent;
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
    this.templateVariables=this.allService.getEmailTemplateVariables();

     
  }



  updateEmailTemplate(){
    this.allService.updateEmailTemplateId(this.emailTemplate.value).subscribe((res)=>{

    RecordUpdated();
      this.router.navigate(['/crm/emailTemplate'])
    },
    (error)=>{
      console.log(error);
    })
  }

  postEmailTemplate(){
    this.allService.postEmailTemplate(this.emailTemplate.value).subscribe((response)=>{
      // alert('Record Added');
      RecordAdded();
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
    emailTemplateContent : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),emailTemplatevariableValidation]),
    createdBy : new FormControl('-1'),
    updatedBy : new FormControl('-1'),
  })

  submit(){
    console.log(this.emailTemplate);
    
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


validateTemplateVariables(){
  let isInvalid =  emailTemplatevariableValidation(this.emailTemplate.get('emailTemplateContent'));
  if(isInvalid){
    this.isEmailTemplateVariableInValid = true;
  } else {
    this.isEmailTemplateVariableInValid = false;
  }
  
}

setVariable(Templatevariable:string){
  //console.log(this.emailTemplateContent);
 // console.log(this.ckeditorElementComponent.editorInstance.model.document.selection.getFirstPosition().path)
  //  console.log(this.ckeditorElementComponent['elementRef'].nativeElement);
   let editor = this.ckeditorElementComponent.editorInstance;
   const selection = editor.model.document.selection;
   const range = selection.getFirstRange();
   editor.model.change ( writer => {
       writer.insert( '{{'+Templatevariable+'}}', range.start );
   } );
  
  }

 
}
