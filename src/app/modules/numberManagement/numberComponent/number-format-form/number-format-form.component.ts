import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-number-format-form',
  templateUrl: './number-format-form.component.html',
  styleUrls: ['./number-format-form.component.scss','../../numberManagement.scss']
})
export class NumberFormatFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberFormat = new FormGroup({
    'sequence': new FormControl('',Validators.required),
    'levelName': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'length': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'valueType': new FormControl('',Validators.required),
    'delimeter': new FormControl('',Validators.required),
    'levelType': new FormControl('',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";

  get getControl() {
    return this.numberFormat.controls;
  }

  submit(){
    console.log(JSON.stringify(this.numberFormat.value));
  }

  resetForm(){
  }

}
