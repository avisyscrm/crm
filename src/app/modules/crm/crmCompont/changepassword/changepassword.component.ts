import { CrmservicesService } from './../../crm-services/crmservices.service';
import { FitBoundsAccessor } from '@agm/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
import { ConfirmedValidator } from './validator';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordUpdate } from 'src/app/modules/client/sweetalert/sweetalert';

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
  changePassword = new FormGroup({});
  parameter!:any;
  constructor(private service:CrmservicesService, private http: HttpClient,
     private fb: FormBuilder, private route:ActivatedRoute, private router :Router) { 
    
      // Activated route 
      this.route.queryParams.subscribe((params :any)=>{
        this.parameter = params;
        console.log("test123"+JSON.stringify(this.parameter.content));
        
       })
      // 
      this.changePassword = fb.group({

        email:[''],
        password :['',[Validators.required]],
        newPassword: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]]
      }, { 
        validator: ConfirmedValidator('newPassword', 'confirm_password')
      }
      )
     }

  ngOnInit(): void {
    this.changePassword.get('email').setValue(sessionStorage.getItem('username'));

  }


// getUsersData(url:any){
//   this.service.getAlllUsers(url).subscribe(sucess=>{
//   console.log("from sucess: "+sucess);
//   this.headerList=sucess.headerlist;
//   this.data=sucess.page;
//   },error=>{}
//   );  
// }

  // changePassword:FormGroup = this.fb.group ({

  //   email: ['', [Validators.required, Validators.email]],
  //   // password: ['', [Validators.required]],
  //   newPassword :['', [Validators.required]],
  //   // confirmPassword :['', [Validators.required]], 
  //   // email :  new FormControl('', Validators.required),
  //   password  : new FormControl('', Validators.required),
  //   // newPassword : new FormControl('', Validators.required),
  
  // },
  // //  { 
  // //   validator: ConfirmedValidator('newPassword', 'confirmPassword')
  // // }
  // )

  resetForm(){
    this.changePassword.controls['password'].reset();
    this.changePassword.controls['newPassword'].reset();
    this.changePassword.controls['confirm_password'].reset();
  }
 
  get f(){
    return this.changePassword.controls;
  }

  submit(){
    console.log(this.changePassword);
    
    // sessionStorage.setItem('username', this.changePassword.get('username').value);
    this.changePassword.get('email').setValue(sessionStorage.getItem('username'));

    if(this.parameter.content == 'update-password'){
          //New user password 
    this.service.postNewUserPassword(this.changePassword.value).subscribe(()=>{
      PasswordUpdate();
      this.router.navigate(['/login']);
    },
    (error)=>{ console.log("Error whiling updating password");
    })
    }
    else{
      this.service.PostChangePassword(this.changePassword.value).subscribe((res)=>{
        // alert(res+ ": responce")
        PasswordUpdate();
      }, error =>{
        console.log("Error whiling updating password")
      })
    }

  }

  get password(){
    return this.changePassword.get('password');
  } 

  get newPassword(){
    return this.changePassword.get('newPassword');
  } 
  // get confirmPassword(){
  //   return this.changePassword.get('confirmPassword');
  // } 


}
