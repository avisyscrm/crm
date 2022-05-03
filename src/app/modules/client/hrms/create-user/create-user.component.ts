import { AllservicesService } from './../../services/allservices.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { add } from 'date-fns';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  // getAccessToken!:string;
  // actionBtn:string = "Add";
  accessToken:any;
  roles:any=[];
  options:any;

  constructor( private service:AllservicesService, private http: HttpClient) { }

  fetchToken = new FormGroup({
    username : new FormControl('hrishikesh.rane@avisys.in'),
    password : new FormControl('reset@123'),
  });

  ngOnInit(): void {
    this.getAccessToken();
   
  }

  

   createUser = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    role: new FormControl('',Validators.required)
  })

  getAccessToken(){

      this.http.post('http://192.168.1.11:8030/token/accessToken',
      this.fetchToken.value ).subscribe((res)=>{
    
        this.accessToken=res;
        console.log(this.accessToken);
        
        var header=this.accessToken.token_type+" "+this.accessToken.access_token;
  
        console.log(header+"yest");
        let headers = new HttpHeaders({'Authorization':''+header});
        this.options = {headers:headers};
        this.getRoles(this.options);
      },
      (error)=>{
        console.log(error);
      })
  
  }

  getRoles( token:any){
    this.http.get('http://192.168.1.11:8030/roles/getroles',token).subscribe((response)=>{
      console.log(JSON.stringify(response)+"ane");
      this.roles = response;
    }),
    (errror)=>{
      alert('Error while fecthing roles');
    }
  }


  // changePassword(){
  //   this.service.getUserPassword(this.fetchToken['username'].value, this.options)
  // }


  submit(){

    
    this.service.postNewUser(this.createUser.value).subscribe((res)=>{
      alert("User created ");
    },
    (error)=>{
      alert(JSON.stringify(error));
      console.log(error);
     console.log( this.createUser.value);
    })
  }

}
