import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-generated-numbers-form',
  templateUrl: './generated-numbers-form.component.html',
  styleUrls: ['./generated-numbers-form.component.scss','../../numberManagement.scss']
})
export class GeneratedNumbersFormComponent implements OnInit {

  constructor() {
    this.intialvalue = this.generatedNumber.value;
   }

  ngOnInit(): void {
  }
  
  generatedNumber = new FormGroup({
    'number': new FormControl('',Validators.required),
    'specialCategory': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'status': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'price': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'quarantine': new FormControl('',Validators.required),
    'reservation': new FormControl('',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";

  get getControl() {
    return this.generatedNumber.controls;
  }

  submit(){
    console.log(JSON.stringify(this.generatedNumber.value));
    alert(JSON.stringify(this.generatedNumber.value));
  }

  resetForm(){
    this.generatedNumber.reset(this.intialvalue);
  }

}
