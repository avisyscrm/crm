import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from '../../../client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../../crm/crm-services/crmservices.service';

@Component({
  selector: 'number-scheme-configuration',
  templateUrl: './number-scheme-configuration.component.html',
  styleUrls: ['./number-scheme-configuration.component.scss']
})
export class NumberSchemeConfigurationComponent implements OnInit {


  @ViewChild('file1') myInputVariable:ElementRef;
  schemeConfiguration = new FormGroup({
    'sequence': new FormControl(''),
    'level-name': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'level-type': new FormControl('',Validators.required),
    'length': new FormControl('',Validators.required),
    'value-type': new FormControl('',Validators.required),
    'value': new FormControl('',Validators.required),
    'delimeter': new FormControl('',Validators.required),
    
  });



  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute, private http:HttpClient) {

  }

  submit(){
    console.log(JSON.stringify(this.schemeConfiguration.value));
    alert(JSON.stringify(this.schemeConfiguration.value));
  }

  ngOnInit(): void { }
}
