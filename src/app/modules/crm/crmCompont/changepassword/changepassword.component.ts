import { FitBoundsAccessor } from '@agm/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
import { ConfirmedValidator } from './validator';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss','../../crm/crm.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  datas:any;
  header:any;
  options:any;
  accessToken:any;
  headerList:any=[];
  data:any={};
  // changePassword: FormGroup ;
  constructor(private service:AllservicesService, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {

  }


getUsersData(url:any){
  this.service.getAllUsers(url).subscribe(sucess=>{
  console.log("from sucess: "+sucess);
  this.headerList=sucess.headerlist;
  this.data=sucess.page;
  },error=>{}
  );  
}

  changePassword:FormGroup = this.fb.group ({

    // email: ['', [Validators.required, Validators.email]],
    // password: ['', [Validators.required]],
    newPassword :['', [Validators.required]],
    confirmPassword :['', [Validators.required]]
    // email :  new FormControl('', Validators.required),
    // password  : new FormControl('', Validators.required),
    // newPassword : new FormControl('', Validators.required),
  
  },
   { 
    validator: ConfirmedValidator('newPassword', 'confirmPassword')
  })

 
  get f(){
    return this.changePassword.controls;
  }

  submit(){
    console.log(this.changePassword);
    
    // sessionStorage.setItem('username', this.createUser.get('username').value);
    // this.changePassword.get('email').setValue(sessionStorage.getItem('username'));
    // this.service.PostChangePassword(this.changePassword.value).subscribe((res)=>{
    //   // alert(res+ ": responce")
    //   alert("Password Changed");
    // }, error =>{
    //   alert("Error while changing password");
    // })
  }

}
