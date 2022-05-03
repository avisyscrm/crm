import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
// import { onlyChar } from 'src/app/modules/client/validators/validation';
import { onlyChar, selectValidation } from '../../../client/validators/validation';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss','../../crm/crm.component.scss']
})
export class CreateUserComponent implements OnInit {

  // getAccessToken!:string;
  // actionBtn:string = "Add";
  accessToken:any;
  roles:any=[];
  options:any;

  constructor( private service:CrmservicesService, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    // this.getAccessToken();
   this.getRoles();
  }
 
   createUser = new FormGroup({
    firstname : new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]),
    lastname : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    role: new FormControl('',Validators.required)
  })

  getRoles(){
    // this.http.get('http://192.168.1.11:8030/roles/getroles').subscribe((response)=>{
      this.service.getAllRoles().subscribe((response)=>{
      console.log(JSON.stringify(response)+"ane");
      this.roles = response;
    }),
    (errror)=>{
      alert('Error while fecthing roles');
    }
  }

  submit(){
    console.log(this.createUser.value);
    //console.log(""+this.service.post);
    this.service.postNewUser(this.createUser.value).subscribe((res)=>{
      alert("User Created ");
      this.resetForm();
      
      this.router.navigate(['/crm/user-all'])
    },
    (error)=>{
      alert(JSON.stringify(error));
      console.log(error);
     console.log( this.createUser.value);
    })
  }

  resetForm(){
    this.createUser.controls['firstname'].reset();
    this.createUser.controls['lastname'].reset();
    this.createUser.controls['email'].reset();
    this.createUser.controls['password'].reset();
    this.createUser.controls['role'].reset();
  }

}
