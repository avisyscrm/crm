import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-vanity-number',
  templateUrl: './vanity-number.component.html',
  styleUrls: ['./vanity-number.component.scss','../../numberManagement.scss']
})
export class VanityNumberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  vanityNumber = new FormGroup({
    'categoryName': new FormControl('',Validators.required),
    'mask': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'maskSequence': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'priority': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'startDate': new FormControl('',Validators.required),
    'ruleCode': new FormControl('',Validators.required),
    'ruleCombine': new FormControl('',Validators.required),
    'defaultCategory': new FormControl('',Validators.required),
    'reservation': new FormControl('',Validators.required),
    'quarantine': new FormControl('',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";

  get getControl() {
    return this.vanityNumber.controls;
  }

  submit(){
    console.log(JSON.stringify(this.vanityNumber.value));
  }

  resetForm(){
  }

}
