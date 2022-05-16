import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { emailTemplatevariableValidatio } from 'src/app/modules/client/validators/validation';
import { RecordUpdated, RecordAdded } from '../../../client/sweetalert/sweetalert';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { isValid } from 'date-fns';


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
  {
    this.allService.getEmailTemplateVariables().subscribe((response)=>{
     this.templateVariables = response;
    this.emailTemplate.setValidators(emailTemplatevariableValidatio(this.templateVariables))
   })
  }

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

  }


  emailTemplate= new FormGroup({
    emailTemplateId : new FormControl(''),
    emailTemplateName : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    emailTemplateSubject : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    emailTemplateContent : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    createdBy : new FormControl('-1'),
    updatedBy : new FormControl('-1'),
  })
   
  
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
    let emailContent = this.emailTemplate.get('emailTemplateContent').value;
    let templateVariableList:any=this.templateVariables;
    let curlyEmailContentTempVarFound = [];
    const rxp = /{{([^}]+)}}/g;
    let  curMatch;
    while( curMatch = rxp.exec( emailContent ) ) {
    curlyEmailContentTempVarFound.push( curMatch[1] );
    }
    let totalTemplatevariable = templateVariableList?.length;
    let templateVariableKeys = [];
    for(let i = 0; i<totalTemplatevariable;i++) {
        templateVariableKeys.push(templateVariableList[i].key) ;
    }
    let isExist = curlyEmailContentTempVarFound.every(elem => templateVariableKeys.includes(elem));
    if(!isExist)
     {
      this.isEmailTemplateVariableInValid = true;
    } else {
      this.isEmailTemplateVariableInValid = false;
    }
}

setVariable(Templatevariable:string){
   let editor = this.ckeditorElementComponent.editorInstance;
   const selection = editor.model.document.selection;
   const range = selection.getFirstRange();
   editor.model.change ( writer => {
       writer.insert( '{{'+Templatevariable+'}}', range.start );
   } );
  
  }
}

