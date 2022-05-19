
import { onlyChar} from '../../../client/validators/validation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss','../../crm/crm.component.scss']
})
export class ProfilepageComponent implements OnInit {
  // userProfile = new  FormGroup({});  
  actionBtn:string = 'Update';
  userImg:any;
  file:any;
  imgUrl:string = 'assets/images/gallery/uIcon.jpg';
  userId = sessionStorage.getItem('userId');
  intialvalue: any;
  constructor(private crmservice: CrmservicesService, private sweetAlert: SweetalertServiceService) { }

  ngOnInit(): void {

    this.crmservice.getUserProfile(this.userId).subscribe((res:any)=>{
      this.intialvalue = res;
      this.userProfile.patchValue(res);
       this.userImg = res.profileImage;
    },
    (error)=>{
      console.log(error);
    }) 
  }

  resetForm() {
    this.userProfile.reset(this.intialvalue);
  }

  userProfile = new FormGroup({
    'userId': new FormControl(this.userId),
    'firstName' : new FormControl('',[Validators.required,onlyChar]),
    'lastName' :new FormControl('', [Validators.required,onlyChar]),
    'email' :new FormControl('', ),
    'contact' :new FormControl('',[Validators.required,Validators.pattern("^[0-9]{10}$")]),
    'createdBy' :new FormControl('-1'),
    'updatedBy' :new FormControl('-1'),
  }) 

  submit(){
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('user', JSON.stringify(this.userProfile.value));
    this.crmservice.postUserProfile(formData).subscribe(()=>{
      this.sweetAlert.RecordUpdatedStatic();
    },(error)=>{
      console.log(error);
      
    })
  }

  get getControl(){  
    return this.userProfile.controls;
  }

  uploadImage(event:any){
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


