
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { emailTemplatevariableValidatio } from 'src/app/modules/client/validators/validation';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @ViewChild('ckeditorEleRef') ckeditorElementComponent:CKEditorComponent;
  public Editor = ClassicEditor;
 // public  ckeditorElementComponent:CKEditorComponent;
  permission:any=[false,false,false];
  headerList:any=[];
  ajayStri : any ;
  pageNo:any;
  pageSize:any;
  sortBy:any;
  sortDirection:any;
  data:any={};
  byDefaultPaging:any = "pageNo=1&pageSize=5";
  modalRef: BsModalRef;
  templateVariables:any=[];
  isEmailTemplateVariableInValid:boolean = false;
  constructor(private allService:CrmservicesService, private router:Router,private modalService: BsModalService,private sweetAlertService:SweetalertServiceService) {
    this.allService.getEmailTemplateVariables().subscribe((response)=>{
      this.templateVariables = response;
     this.emailTemplate.setValidators(emailTemplatevariableValidatio(this.templateVariables))
    })
   }
  
  ngOnInit(): void {
    this.allService.getEmails("pageNo=1&pageSize=5").subscribe((sucess:any)=>{
      this.headerList=sucess.headerlist  ; //sucess.headerList;
    this.data=sucess.page;
    },
    (error)=>{
      console.log(error)
    })
   
  }

  
  emailTemplate= new FormGroup({
    emailId : new FormControl(''),
    emailTo : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    emailSubject : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    emailContent : new FormControl('',[Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    createdBy : new FormControl('-1'),
    updatedBy : new FormControl('-1'),
  })

  get emailTo(){
    return this.emailTemplate.get('emailTo');
  }

  get emailSubject(){
    return this.emailTemplate.get('emailSubject');
  } 
  
  get emailContent(){
    return this.emailTemplate.get('emailContent');
  }

  submit(){
    console.log(this.emailTo.value);
    if(this.emailTo.value!=undefined){
      this.resendEmail()
    }
  }

  resendEmail(){
    this.allService.resendEmail(this.emailTo.value).subscribe((response)=>{
     console.log(response);
     this.sweetAlertService.mailcheck(null);
     setTimeout(() => {
      this.modalRef.hide();
     }, 2000);
    },
    (error)=>{
      console.log(error);
    })
  }
  validateTemplateVariables(){
    let emailContent = this.emailTemplate.get('emailContent').value;
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



  pagination(url){
   
  }
 


  changePageSortSearch(url:string){
    this.ajayStri =""+ url.toString();
    // var splittedpaging = this.ajayStri.split('&',4);
    // this.pageNo=splittedpaging[0].substring(splittedpaging[0].indexOf("=")+1,splittedpaging[0].length);
    // this.pageSize=splittedpaging[1].substring(splittedpaging[1].indexOf("=")+1,splittedpaging[1].length);
    // this.sortBy=splittedpaging[2].substring(splittedpaging[2].indexOf("=")+1,splittedpaging[2].length);
    // this.sortDirection=splittedpaging[3].substring(splittedpaging[3].indexOf("=")+1,splittedpaging[3].length);
    this.byDefaultPaging=url;

    this.allService.getAllEmailTemplate(url).subscribe((sucess:any)=>{
      // this.headerList=sucess.headerlist  ; //sucess.headerList;
    this.data=sucess.page;
    },
    (error)=>{
      console.log(error)
    })

  } 

  buttonEvent1(data:any){
    if(data.event=='add'){
      this.router.navigate(['crm/crm/emailTemplateForm']);   
    }else if(data.event=='edit'){
      // alert(JSON.stringify(data.data));
      this.router.navigate(['crm/crm/emailTemplateForm'],{ queryParams: { data: JSON.stringify(data.data.emailTemplateId)} });
        console.log(data.data, 'data')
    } else if(data.event == 'delete'){
      // alert(JSON.stringify(data));
      this.allService.deleteEmailTemplateId(data.data.emailTemplateId, data.data.updatedBy).subscribe((res)=>{
        console.log(res);
        this.changePageSortSearch(this.byDefaultPaging);
      })  
    
    } 
    }

    setVariable(Templatevariable:string,template:ElementRef){
      
      console.log(this.emailTemplate.controls['emailContent'].value);
      this.emailTemplate.controls['emailContent'].setValue(this.emailTemplate.controls['emailContent'].value+'{{'+Templatevariable+'}}');
    
      // console.log(this.ckeditorElementComponent);
      // let editor = template;
      //   const selection = editor;
      // const range = selection.getFirstRange();
      // editor.model.change ( writer => {
      //     writer.insert( '{{'+Templatevariable+'}}', range.start );
      // } );
      console.log(template)
      
     }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template,{class:'modal-lg',animated: true});
      document.getElementsByClassName("modal")[0].classList.add("right");
      this.emailTo.setValue("ajay.shinde@avisys.in:T:2022-05-10T20:28:06.032944")
      this.emailSubject.setValue("Test Email")
      this.emailContent.setValue("<h4>Hello Email</h1>")
     // @ViewChild('ckeditorEleRef') this.ckeditorElementComponent:CKEditorComponent;
    }
    
}



