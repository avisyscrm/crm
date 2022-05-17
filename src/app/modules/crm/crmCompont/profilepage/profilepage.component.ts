import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss','../../crm/crm.component.scss']
})
export class ProfilepageComponent implements OnInit {
  // userProfile = new  FormGroup({});  
  actionBtn:string = 'Add';
  btn;
  productFamilyIcons:any;
  userImg:any;
  file:any;
  imgUrl:string = 'assets/images/gallery/10.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  userProfile = new FormGroup({
    'fName' : new FormControl(''),
    'lName' :new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    'email' :new FormControl('', [Validators.required, Validators.maxLength(400), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    'contact' :new FormControl(''),
    'createdBy' :new FormControl('-1'),
    'updatedBy' :new FormControl('-1'),
  }) 

  submit(){}

  get getControl(){  
    return this.userProfile.controls;
  }

  uploadImage(event:any){
    debugger
    if(event.target.files.length > 0) {
      this.file = event.target.files.item(0);
      // alert("file"+this.file);
      var reader = new FileReader();
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.userImg = reader.result; 
      }
     
    }
  }

}
