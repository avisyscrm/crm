import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from 'src/app/modules/crm/crm-services/crmservices.service';

@Component({
  selector: 'app-number-generation',
  templateUrl: './number-generation.component.html',
  styleUrls: ['./number-generation.component.scss']
})
export class NumberGenerationComponent implements OnInit {


  @ViewChild('file1') myInputVariable:ElementRef;
    NumberGeneration = new FormGroup({
    'scheme-name': new FormControl(''),
    'type': new FormControl(''),
    'sub-type': new FormControl(''),
    'format': new FormControl('', Validators.required),
    'block-name': new FormControl('',Validators.required),
    'block-range': new FormControl('',Validators.required),
    'running-number': new FormControl('',Validators.required),
    'quantity': new FormControl('',Validators.required),
    'end-running-number': new FormControl('',Validators.required),
    'status': new FormControl('',Validators.required),
    'number-status': new FormControl('',Validators.required),
    'allocated-to': new FormControl('',Validators.required),
    'execution-time': new FormControl('',Validators.required),
    'checksum-requires': new FormControl('',Validators.required),
    'last-updated-by': new FormControl('',Validators.required),
    'last-updated-on': new FormControl('',Validators.required),
 
  });



  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute, private http:HttpClient) {

  }

  submit(){
    console.log(JSON.stringify(this.NumberGeneration.value));
    alert(JSON.stringify(this.NumberGeneration.value));
  }

  ngOnInit(): void { }
}
