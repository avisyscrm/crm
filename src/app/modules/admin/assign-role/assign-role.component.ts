import { CrmservicesService } from './../../crm/crm-services/crmservices.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SweetalertServiceService } from '../../client/sweetalert/sweetalert-service.service';

@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.scss']
})
export class AssignRoleComponent implements OnInit {

  // UserID: any;
  UserListId: any;
  alluserrolesdata: any=[];
  SelectedArray:any=[];
  constructor(private alertService: SweetalertServiceService,private service: CrmservicesService) { }
  ngOnInit(): void {
    this.service.getallUser().subscribe((data: any) => {
      this.UserListId = data;
    });
  }
  assignRole = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    role: new FormControl([],[Validators.required]),
  })
  chnageUser() {

    this.service.edituser(this.assignRole.controls['userId'].value).subscribe((data: any) =>{
      this.assignRole.controls['role'].patchValue(data.role);
      this.alluserrolesdata=data.avaliableRoles;
      this.SelectedArray=data.role;
    });
  }
  submit() {
    this.service.postRoles(this.assignRole.value).subscribe((res) => {
      this.reset();
          this.alertService.roleAssigned();
         
    },
      error => console.log(error)
    )
  }

  reset(){
    this.assignRole.controls['userId'].reset();
    this.SelectedArray = [];
    this.alluserrolesdata = [];
  }
  exportSelectedArray(value){
    this.assignRole.controls['role'].patchValue(value);
  }
}

