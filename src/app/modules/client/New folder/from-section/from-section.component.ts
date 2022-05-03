import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-from-section',
  templateUrl: './from-section.component.html',
  styleUrls: ['./from-section.component.scss']
})
export class FromSectionComponent implements OnInit {

  @Input() fromDetails:any={};
  sectionFromDetails: any={};
  myForm= new FormGroup({});

  constructor() { 
 
  console.log(this.fromDetails);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.fromDetails?.page!=undefined){
      // alert(this.fromDetails?.page?.length)
      for(let j=0;j<this.fromDetails?.page?.length;j++){
        for(let i=0;i<this.fromDetails?.page[j]?.section?.components?.length;i++){
          this.myForm.addControl(this.fromDetails.page[j]?.section?.components[i]?.productAttribute,
             new FormControl(this.fromDetails.page[j]?.section?.components[i]?.value, Validators.required));
        }
      }
      // alert(JSON.stringify(this.myForm.value))
         this.sectionFromDetails=this.fromDetails;
    }
 
  }


  ngOnInit(): void {
  
  }

  get getControl(){
    return this.myForm.controls;
  }
  submit(myForm:FormGroup){
    if(this.myForm.valid){
alert(JSON.stringify(this.myForm.value))
    }else{
      for (const key in myForm.controls) {
        if (myForm.controls.hasOwnProperty(key)) {
            const control: FormControl = <FormControl>myForm.controls[key];
  
            if (Object.keys(control).includes('controls')) {
                const formGroupChild: FormGroup = <FormGroup>myForm.controls[key];
               // this.showValidationMsg(formGroupChild);
            }
  
            control.markAsTouched();
        }
    }
    }

  }

}
