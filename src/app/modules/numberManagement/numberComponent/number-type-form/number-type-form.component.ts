import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';

@Component({
  selector: 'app-number-type-form',
  templateUrl: './number-type-form.component.html',
  styleUrls: ['./number-type-form.component.scss']
})
export class NumberTypeFormComponent implements OnInit {

  @ViewChild('file1') myInputVariable:ElementRef;
  numberType = new FormGroup({
    'typeid': new FormControl(''),
    'type': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'statusafterGeneration': new FormControl('',Validators.required),
    'allocation-allowed': new FormControl(false,Validators.required),
    'sceheme-definition': new FormControl(false,Validators.required),
    'valid-format': new FormControl(false,Validators.required),
    'released': new FormControl(false,Validators.required),
    'technology-generation': new FormControl(false,Validators.required),
  });



  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute, private http:HttpClient) {

  }

  submit(){
    console.log(JSON.stringify(this.numberType.value));
    alert(JSON.stringify(this.numberType.value));
  }

  ngOnInit(): void { }


}
