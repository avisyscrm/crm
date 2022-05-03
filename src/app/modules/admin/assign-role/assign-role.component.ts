import { CrmservicesService } from './../../crm/crm-services/crmservices.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    userId: new FormControl('',[ Validators.required]),
    role: new FormControl('', ),
  })

  // calling prod line from family id

submit(){
  this.service.postRoles(this.assignRole.value).subscribe((res)=>{
    alert("Role Assigned");
    // this.productEntity.reset();
    
  },
    error => console.log(error)
  )
}
}

