import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { LoginService } from 'src/app/core/services/login.service';
import { AllservicesService } from '../../client/services/allservices.service';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})
export class LoginComponent implements OnInit {
  invalidUser: boolean = false;
  passwordType: string = 'password';
  passwordShown:boolean = false;

  constructor(private allservice: CrmservicesService, private router: Router) {}

  createUser = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  submit() {
    this.allservice.login(this.createUser.value).subscribe((data: any) => {
      sessionStorage.setItem('username', this.createUser.get('username').value);      
      sessionStorage.setItem('access_token', data.access_token);
      sessionStorage.setItem('session_id', data.session_state);
      sessionStorage.setItem('userDetails',JSON.stringify(data));
      sessionStorage.setItem('userId',data.userId);
      this.router.navigate(["master"])
      console.log(data);
      
    }, error => {
      console.log(error);
      if(error.status == 428){
        sessionStorage.setItem('username', this.createUser.get('username').value); 
        this.router.navigate(["/crm/change-password"], { queryParams: {content: 'update-password'}})
      }
      else{
        this.invalidUser = true;
      }
      
      
    }
    );
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

  ngOnInit(): void {

  }




}
