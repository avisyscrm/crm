import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllservicesService } from '../../client/services/allservices.service';

@Component({
  selector: 'app-forgot-pass-form',
  templateUrl: './forgot-pass-form.component.html',
  styleUrls: ['./forgot-pass-form.component.scss']
})
export class ForgotPassFormComponent implements OnInit {

  badRequest: boolean = true;
  accessToken:any;
  roles:any=[];
  options:any;
  randomCode:any;
  private parameter: any;
  randomcodesuccess:number=0; 
  // randomcodeurl:any;
  // ForgotPassword:FormGroup;

  constructor(private formBuilder: FormBuilder, private service:AllservicesService, 
    private http: HttpClient, private route:ActivatedRoute) { 
 
   debugger
  }
  
  ngOnInit(): void {
  
    // this.getAccessToken();

    this.route.queryParams.subscribe((param:any)=>{
      this.parameter = param;
      // this.randomcodeurl = JSON.stringify(this.parameter);
      console.log(this.parameter,"parammmssssster");
      
    })
    //  debugger
    this.service.getVerifyRandomCode(this.parameter.verificationCode).subscribe((success)=>{
      this.randomcodesuccess=success.status;
          
      if(this.randomcodesuccess==200){
        this.badRequest=false;
      }

     
    })

    
    
  }

  // fetchToken = new FormGroup({
  //   username : new FormControl('mary.harry@avisys.in'),
  //   password : new FormControl('Mary@123'),
  // });


  ForgotPassword = new FormGroup({
    newPassword : new FormControl('', Validators.required),
    confirmPassword  :new FormControl('', Validators.required),
    randomCode : new FormControl('')
  }
  );



  submit(){
    this.ForgotPassword.get('randomCode').setValue(this.parameter.verificationCode);
    console.log(this.ForgotPassword.value);
    
    this.service.PostChangePasswordWithRandomString(this.ForgotPassword.value).subscribe((res)=>{
      // alert(res+ ": responce")
      alert("Password Changed");
    }, error =>{
      alert("Error while changing password");
    })
  }

  
  postforgotpass(data:any){
   
  }

  extractRandomCode(ranomcode:string){
    const myArray = ranomcode.split(":");
    this.randomCode = myArray[1];
    alert(this.randomCode+" : random");
     
  }

}
