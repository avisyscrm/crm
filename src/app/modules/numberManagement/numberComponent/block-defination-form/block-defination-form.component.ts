import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-block-defination-form',
  templateUrl: './block-defination-form.component.html',
  styleUrls: ['./block-defination-form.component.scss','../../numberManagement.scss']
})
export class BlockDefinationFormComponent implements OnInit {


  constructor() { 
    this.intialvalue = this.blockdefine.value;
  }

  ngOnInit(): void {
  }
  blockdefine = new FormGroup({
    'bname': new FormControl('',Validators.required),
    'recievedDate': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    'start': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'end': new FormControl('',[Validators.required, Validators.maxLength(10)]),
    'tcount': new FormControl('',Validators.required),
    'status': new FormControl('',Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";
  start:any;
  end:any;
  result:any;
  
  get getControl() {
    return this.blockdefine.controls;
  }

  submit(){
    console.log(JSON.stringify(this.blockdefine.value));
    alert(JSON.stringify(this.blockdefine.value));
  }

  resetForm(){
    this.blockdefine.reset(this.intialvalue);
  }
}
