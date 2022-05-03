import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';

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
    name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    
   
})

submit(){
  this.service.postCreateRole(this.createRole.value).subscribe((res)=>{
    alert("Role Added");
    this.router.navigate(['/crm/adminRole-table'])
    // this.productEntity.reset();
    
  },
    error => console.log(error)
  )
}
}
