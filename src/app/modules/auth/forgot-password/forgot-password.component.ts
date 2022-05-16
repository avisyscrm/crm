import { CrmservicesService } from './../../crm/crm-services/crmservices.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { AllservicesService } from '../../client/services/allservices.service';
import { SweetalertServiceService } from '../../client/sweetalert/sweetalert-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: false } }
  ]
})
export class ForgotPasswordComponent implements OnInit {

  accessToken:any; 
  roles:any=[];
  options:any;
  randomCode:any;
  getforgotenpass:any;
  constructor( private service:CrmservicesService, private http: HttpClient, private alertService: SweetalertServiceService) { }

  ngOnInit(): void {}

   
  ForgotPassword = new FormGroup({
    email :  new FormControl('', [Validators.required,Validators.email]),
    
  })

  submit(){
    
    this.service.getForgotPasswords(this.ForgotPassword.get('email').value).subscribe((data=>{
      this.getforgotenpass = data;
      console.log(this.getforgotenpass, "forgot pass emial");
      
      this.alertService.mailcheck('login');
    }))
  }

  extractRandomCode(ranomcode:string){
    const myArray = ranomcode.split(":");
    this.randomCode = myArray[1];
    alert(this.randomCode+" : random");
     
  }

}
