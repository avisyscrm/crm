import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { onlyChar, selectValidation } from '../../../client/validators/validation';
import { RecordUpdated, RecordAdded, } from '../../../client/sweetalert/sweetalert';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';



@Component({
  selector: 'app-product-template-form',
  templateUrl: './product-template-form.component.html',
  styleUrls: ['./product-template-form.component.scss','../../crm/crm.component.scss']
})
export class ProductTemplateFormComponent implements OnInit {
  intialvalue: any;
  productTemplate = new FormGroup({
 
  });
  actionBtn: string="Save";
  constructor(private service : CrmservicesService,  private alertService: SweetalertServiceService, 
    private router:Router, private route:ActivatedRoute) { 

      this.intialvalue = this.productTemplate.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
      
      }
    });
    }
  ngOnInit(){}

  getValueByID(id){
    
  }
}
