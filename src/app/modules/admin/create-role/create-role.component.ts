import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
import {  CreateRole } from '../../client/sweetalert/sweetalert';
import { onlyChar } from '../../client/validators/validation';


@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  constructor(private service : CrmservicesService, private router : Router) { }

  ngOnInit(): void { 
   
  }
  

  createRole = new FormGroup({
    // id: new FormControl('',[ Validators.required]),
    name:new FormControl('',[Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]),
    description:new FormControl('',[Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]),
    
   
})

submit(){
  this.service.postCreateRole(this.createRole.value).subscribe((res)=>{
    // alert("Role Added");
    CreateRole();
    this.router.navigate(['/crm/crm/adminRole-table'])
    // this.productEntity.reset();
    
  },
    error => console.log(error)
  )
}

get name(){
  return this.createRole.get('name');
} 

get description(){
  return this.createRole.get('description');

} 
}
