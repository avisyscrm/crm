import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { RecordUpdated, RecordAdded } from '../../../client/sweetalert/sweetalert';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss','../../crm/crm.component.scss']
})
export class EntityFormComponent implements OnInit {
  @ViewChild('files') myInputVariable: ElementRef;
  entityGroups = new FormGroup({
    'entityGroupsId': new FormControl(''),
    'entityGroups': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'description': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'entityGroupsIcon': new FormControl('', Validators.required),
    'createdBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
    'updatedBy': new FormControl(JSON.parse(sessionStorage.getItem('userDetails')).userId),
  });
  intialvalue: any;
  actionBtn = "Save";
  file: any;
  constructor(private service: CrmservicesService, public translate: TranslateService,
    private alertService: SweetalertServiceService, private route: ActivatedRoute,  private router:Router) {
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
    }, error => {
      // alert("Error while updating the record");
    });
  } 
  ngOnInit(): void { }
  submit() {
    this.entityGroups.controls['createdBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
    this.entityGroups.controls['updatedBy'].patchValue(JSON.parse(sessionStorage.getItem('userDetails')).userId);
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
          this.alertService.RecordUpdated('/crm/entity-groups');
        });
      }
    } else {
      if(this.file!=undefined){ 
        this.service.addEntityGroupsData(formData).subscribe((sucess:any) => {
          if (sucess.statusCode == 23505) {
            this.alertService.SelectRecord("Entity Group already exist");
          } else {
            this.alertService.RecordAdded('/crm/entity-groups');
          }
        });
      }
    else{
      // alert("Please select File");
    }
    }
  }

  resetForm() {
    this.entityGroups.reset(this.intialvalue);
    this.myInputVariable.nativeElement.value = "";


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
        let imagePath=reader.result;
         this.entityGroups.controls['entityGroupsIcon'].setValue(imagePath);
      }
    }
  }

  back(){
    this.router.navigate(['/crm/entity-groups'])
  }

}
