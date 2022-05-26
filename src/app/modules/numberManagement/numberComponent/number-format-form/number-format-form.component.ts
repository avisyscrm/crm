import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-number-format-form',
  templateUrl: './number-format-form.component.html',
  styleUrls: ['./number-format-form.component.scss','../../numberManagement.scss']
})
export class NumberFormatFormComponent implements OnInit {
  permission:any=[true,true,true];
  data:any={};
  headerList:any=[];

  constructor(private modalService: BsModalService, private http: HttpClient) { }
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

  numberDefination = new FormGroup({
    'typeId' : new FormControl(''),
    'type' : new FormControl(''),
    'description' : new FormControl('')
  });

  intialvalue: any;
  actionBtn = "Save";
  modalRef: BsModalRef;

  get getControl() {
    return this.numberFormat.controls;
  }

  submit(){
    console.log(JSON.stringify(this.numberFormat.value));
    alert(JSON.stringify(this.numberFormat.value));
    this.http.post('assets/data/data.json',this.numberFormat.value).subscribe(()=>{
      alert('done');

    },
    (error)=>{
      alert('not');
    })
  }

  resetForm(){
  }

  changePageSortSearch(url:any){

  }
  buttonEvent1(data:any,template){
    if(data.event=='add'){
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-xl ' }));

    }
    else if(data.event=='edit'){

    }
    else if(data.event == 'delete'){
    
    } 
  }

}
