import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';

@Component({
  selector: 'app-vanity-pattern-rules',
  templateUrl: './vanity-pattern-rules.component.html',
  styleUrls: ['./vanity-pattern-rules.component.scss']
})
export class VanityPatternRulesComponent implements OnInit {


  @ViewChild('file1') myInputVariable:ElementRef;
  numberType = new FormGroup({
    'rule-code': new FormControl(''),
    'type': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'mask': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'mask-sequence': new FormControl(false, Validators.required),
    'length': new FormControl('',Validators.required),
    'occurence': new FormControl(false,Validators.required),
    'reverse-check': new FormControl('',Validators.required),

    
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
