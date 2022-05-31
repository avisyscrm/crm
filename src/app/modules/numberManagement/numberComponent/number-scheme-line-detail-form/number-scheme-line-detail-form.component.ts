import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-numberschemelinedetail',
  templateUrl: './number-scheme-line-detail-form.html',
  styleUrls: ['./number-scheme-line-detail-form.scss','../../numberManagement.scss']
})
export class NumberSchemeLineDetailFormComponent implements OnInit {
  numberSchemeLine = new FormGroup({
    'sequence': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'levelName': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required]),
    'levelType': new FormControl('',[Validators.required]),
    'length': new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
    'valueType': new FormControl('',[Validators.required]),
    'value': new FormControl('',[Validators.required]),
    'delimiter': new FormControl('',[Validators.required]),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  actionBtn:string;
  constructor() {
    this.actionBtn  = "Save";
   }

  ngOnInit(): void {
  }

}
