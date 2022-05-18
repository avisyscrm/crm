import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { onlyChar, selectValidation } from '../../../client/validators/validation';
// import Swal from 'sweetalert2';
import { RecordUpdated, RecordAdded } from '../../../client/sweetalert/sweetalert';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss','../../crm/crm.component.scss']
})
export class EntityFormComponent implements OnInit {
  @ViewChild('files') myInputVariable: any;
  entityGroups = new FormGroup({
    'entityGroupsId': new FormControl(''),
    'entityGroups': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'entityGroupsIcon': new FormControl(''),
    'createdBy': new FormControl('-1', Validators.required),
    'updatedBy': new FormControl('-1', Validators.required),
  });
  intialvalue: any;
  actionBtn = "Save";
  productFamilyIcons: any;
  file: any;
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute) {
    this.intialvalue = this.entityGroups.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);
      }
    });
  }
  getValueByID(id) {
    this.service.getEntityGroupData(id).subscribe((sucess: any) => {
      this.entityGroups.patchValue(sucess);
      this.intialvalue = sucess;
      this.entityGroups.patchValue(sucess);
      this.productFamilyIcons = sucess.productLineIcon;
    }, error => {
      alert("Error while updating the record");
    });
  } 
  ngOnInit(): void { }
  submit() {
 
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('entityGroups', JSON.stringify(this.entityGroups.value));
    if (this.actionBtn == "Update") {
      if(this.file!=undefined){
        this.service.updatEentityGroupsData(formData).subscribe(sucess => {
          this.alertService.RecordUpdated('crm/entity-groups');
        });
      }else{
        this.service.updatEentityGroupsDataWithoutFile(this.entityGroups.value).subscribe(sucess => {
          this.alertService.RecordUpdated('/crm/product-line');
        });
      }
    
    } else {
      if(this.file!=undefined){ 
        this.service.addEntityGroupsData(formData).subscribe(sucess => {
          this.alertService.RecordAdded('crm/entity-groups');
        })
      }
    else{
      alert("Please select File");
    }
     
    }
    
  }

  resetForm() {
    this.entityGroups.reset(this.intialvalue);
  }
  get getControl() {
    return this.entityGroups.controls;
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files.item(0);
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        this.productFamilyIcons = reader.result;
      }
    }
  }
}
