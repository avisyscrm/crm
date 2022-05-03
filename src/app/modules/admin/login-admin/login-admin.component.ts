import { CrmservicesService } from './../../crm/crm-services/crmservices.service';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from '../../client/services/allservices.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  invalidUser : boolean = false;
  constructor(private router:Router, private service : CrmservicesService) { }

  ngOnInit(): void {
  }

  createAdmin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  submit(){
    this.service.adminLogin(this.createAdmin.value).subscribe((data:any)=>{
      sessionStorage.setItem('username', this.createAdmin.get('username').value);      
      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('session_id', data.session_state); 
      sessionStorage.setItem('dataProp','crmAdminLogin');
      sessionStorage.setItem('userisAdmin','admin');
      this.router.navigate(["/crm"], {queryParams:{prop: 'crmAdminLogin'}})
    }, error => {
      this.invalidUser = true;
      alert("Error while logging infdgd.")
    })
      // this.router.navigate(["crm"])
  }
}


