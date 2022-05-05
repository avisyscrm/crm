import { CrmservicesService } from './../../crm-services/crmservices.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-scheduleemail-form',
  templateUrl: './scheduleemail-form.component.html',
  styleUrls: ['./scheduleemail-form.component.scss']
})
export class ScheduleemailFormComponent implements OnInit {
  actionBtn:string = "Save";
  allEmailTemplates:any=[];  
  constructor( private allService: CrmservicesService) { }

  ngOnInit(): void {
    this.allService.getEmailTemplates().subscribe((res)=>{
      this.allEmailTemplates = res;
      console.log(res);
    },
    (error)=>{})
  }

  scheduleEmail = new FormGroup({
    templateId : new FormControl(''),
    scheduleTime : new FormControl('',Validators.required),
    recipient: new FormControl([],Validators.required),
    jobName : new FormControl('',Validators.required),
  });

  submit(){
    this.allService.postScheduleEmail(this.scheduleEmail.value).subscribe(()=>{
      alert("Record Added");
    },
    (error)=>{
      console.log(error); 
    })
  }

  resetForm(){}

}
