import { CrmservicesService } from './../../crm-services/crmservices.service';
import { FitBoundsAccessor } from '@agm/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
import { ConfirmedValidator } from './validator';
import { ActivatedRoute, Router } from '@angular/router';
import { invalidPassword, PasswordUpdate } from 'src/app/modules/client/sweetalert/sweetalert';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss', '../../crm/crm.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  datas: any;
  header: any;
  options: any;
  accessToken: any;
  headerList: any = [];
  data: any = {};
  changePassword = new FormGroup({});
  parameter!: any;
  validPassword: boolean = false;
  passwordType: string = 'password';
  passwordShown:boolean = false;
  passwordType1: string = 'password';
  passwordShown1:boolean = false;
  passwordType2: string = 'password';
  passwordShown2:boolean = false;

  constructor(private service: CrmservicesService, private http: HttpClient,
    private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private alertService: SweetalertServiceService) {

    // Activated route 
    this.route.queryParams.subscribe((params: any) => {
      this.parameter = params;
      console.log("test123" + JSON.stringify(this.parameter.content));

    })
    // 
    this.changePassword = fb.group({

      email: [''],
      password: ['', [Validators.required]],
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

  togglePassword(){
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';

    }
    else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  togglePassword1(){
    if(this.passwordShown1){
      this.passwordShown1 = false;
      this.passwordType1 = 'password';

    }
    else {
      this.passwordShown1 = true;
      this.passwordType1 = 'text';
    }
  }

  togglePassword2(){
    if(this.passwordShown2){
      this.passwordShown2 = false;
      this.passwordType2 = 'password';
    }
    else {
      this.passwordShown2 = true;
      this.passwordType2 = 'text';
    }
  }


  resetForm() {
    this.changePassword.controls['password'].reset();
    this.changePassword.controls['newPassword'].reset();
    this.changePassword.controls['confirm_password'].reset();
    this.validPassword = false;
  }

  get f() {
    return this.changePassword.controls;
  }

  submit() {
    console.log(this.changePassword);

    // sessionStorage.setItem('username', this.changePassword.get('username').value);
    this.changePassword.get('email').setValue(sessionStorage.getItem('username'));

    if (this.parameter.content == 'update-password') {
      //New user password 
      this.service.postNewUserPassword(this.changePassword.value).subscribe(() => {
        PasswordUpdate();
        this.alertService.PasswordUpdateURL('login');
        this.resetForm();
        // this.router.navigate(['/login']);
      },
        (error) => {
          if (error.status == 400) {
            // this.validPassword = true;
            invalidPassword();
            // this.resetForm();
            console.log("Error whiling updating password");
          }

        })
    }
    else {
      this.service.PostChangePassword(this.changePassword.value).subscribe((res) => {
        // alert(res+ ": responce")
        this.resetForm();
        PasswordUpdate();
      }, error => {
        if (error.status == 400) {
          // this.validPassword = true;
          invalidPassword();
          // this.resetForm();
          console.log("Error whiling updating password");
        }
        console.log("Error whiling updating password")
      })
    }

  }

  get password() {
    return this.changePassword.get('password');
  }

  get newPassword() {
    return this.changePassword.get('newPassword');
  }
  // get confirmPassword(){
  //   return this.changePassword.get('confirmPassword');
  // } 


}
