import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
import Swal from 'sweetalert2';

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
    // alert("Role Added");
    this.sweettalert9();
    this.router.navigate(['/crm/adminRole-table'])
    // this.productEntity.reset();
    
  },
    error => console.log(error)
  )
}
  // update
  sweettalert7() {
    Swal.fire({
      title: 'Updated',
      text: 'You data is updated!',
      icon: 'success',
      cancelButtonText: 'Ok',
    })

  }

  // add
  sweettalert9() {

    Swal.fire({
      title: 'Success',
      text: 'Record Added successfully',
      icon: 'success',
      cancelButtonText: 'Ok',
  
  
    })
  }

}
