import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
// import { onlyChar } from 'src/app/modules/client/validators/validation';
import { onlyChar, selectValidation } from '../../../client/validators/validation';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { ToastrService } from 'ngx-toastr';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { emailAlreadyTaken } from 'src/app/modules/client/sweetalert/sweetalert';
import { ConfirmedValidator } from '../changepassword/validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss', '../../crm/crm.component.scss']
})
export class CreateUserComponent implements OnInit {
  accessToken: any;
  roles: any = [];
  options: any;
  label = "Add";
  SelectedArray: any = [];
  alluserrolesdata: any = [];
  passwordType: string = 'password';
  passwordShown: boolean = false;
  passwordType1: string = 'password';
  passwordShown1: boolean = false;
  createUser = new FormGroup({});
  
  constructor(private alertService: SweetalertServiceService, private fb: FormBuilder, private service: CrmservicesService, private http: HttpClient, private router: Router, private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
      if (params.id != undefined && params.id != null) {
        this.service.edituser(params.id).subscribe((data: any) => {
          this.label = "Update";
          this.createUser.addControl("userId",
            new FormControl(params.id, Validators.required));
            this.createUser.patchValue(data);
          this.alluserrolesdata = data.avaliableRoles;
          this.SelectedArray = data.role;
          this.createUser.removeControl('password');
          this.createUser.removeControl('confirm_password');
        });
      } else {
        this.label = "Add";
          this.service.getallRoles().subscribe((data: any) => {
          let data1 = [];
          
          data1 = data.map(x => x.name);
          this.alluserrolesdata = data1;
        })
        }
    });

    this.createUser = fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['',Validators.required],
      confirm_password: ['',Validators.required],
      role: ['', Validators.required],
      isTemporary : [false],
    }, {
      validator: ConfirmedValidator('password', 'confirm_password')
    }
    )


  }

  ngOnInit(): void {
    this.getRoles();
  }

  togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';

    }
    else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

  togglePassword1() {
    if (this.passwordShown1) {
      this.passwordShown1 = false;
      this.passwordType1 = 'password';

    }
    else {
      this.passwordShown1 = true;
      this.passwordType1 = 'text';
    }
  }


  getRoles() {
    this.service.getAllRoles().subscribe((response) => {
      this.roles = response;
    }),
      (errror) => {
        alert('Error while fecthing roles');
      }
  }

  reset(){
    this.createUser.controls['firstName'].reset();
    this.createUser.controls['lastName'].reset();
    this.createUser.controls['email'].reset();
    this.createUser.controls['password'].reset();
    this.createUser.controls['confirm_password'].reset();
    this.createUser.controls['role'].reset();

  }
  submit() {
    console.log(this.createUser.value);
    if (this.label == "Update") {
      
      this.service.postOldUser(this.createUser.value).subscribe((res) => {
     
        this.alertService.RecordUpdated('/crm/user-all');
      },
        (error) => {
          alert(JSON.stringify(error));

        })

    } else {
      this.service.postNewUser(this.createUser.value).subscribe((res) => {
        this.alertService.RecordAdded('/crm/user-all');
      },
      
        (error) => {
          if(error.status == 409){
            emailAlreadyTaken();
          }
        });
    }
 
  }
  exportSelectedArray(value) {
    this.SelectedArray = value;
    this.createUser.controls['role'].patchValue(value);
  }

  get getControl() {
    return this.createUser.controls;
  }

}
