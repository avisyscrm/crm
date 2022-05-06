import { CrmservicesService } from './../../crm/crm-services/crmservices.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleAssigned } from '../../client/sweetalert/sweetalert';
import { selectValidation } from '../../client/validators/validation';


@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {

  
  UserID:any;
  UserListId:any;
  alluserrolesdata:any; 

  constructor(private service : CrmservicesService) { }

  ngOnInit(): void {

    this.service.getallUser().subscribe((data: any) => {
      this.UserListId = data;
    })
    this.service.getallRoles().subscribe((data: any) => {
      this.alluserrolesdata = data;
    })
    
  }

  assignRole = new FormGroup({
    userId: new FormControl('',[ Validators.required, selectValidation]),
    role: new FormControl('',[ Validators.required, selectValidation] ),
  })

  // calling prod line from family id

submit(){
  this.service.postRoles(this.assignRole.value).subscribe((res)=>{
    RoleAssigned();
    // this.productEntity.reset();
    
  },
    error => console.log(error)
  )
}

get role(){
  return this.assignRole.get('role');
} 

get userId(){
  return this.assignRole.get('userId');
} 

}

