import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { selectValidation } from 'src/app/modules/client/validators/validation';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-tabs-form',
  templateUrl: './product-tabs-form.component.html',
  styleUrls: ['./product-tabs-form.component.scss', '../../crm/crm.component.scss']
})
export class ProductTabsFormComponent {
  @ViewChild('parentSelect') parentSelect:ElementRef;
  selcted = "External details";
  permission: any = [true, true, true];
  headerList: any = []
  allProductEntityTempidd: any = [];
  tempId: any;
  selectedState:any;
  url: String = "?pageNo=1&pageSize=5";
  selectedFilter = "";
  tabid: any = [];
  actionBtn: string = "Add";
  data: any = {};
  typeTabDection: String = 'Tab';
  AddTabs = new FormGroup({
    productEntityTemplateId: new FormControl('', selectValidation),
    type: new FormControl('Tab', Validators.required),
    section: new FormControl('', Validators.required),
    sequenceId: new FormControl('', Validators.required),
    createdBy: new FormControl('-1'),
    updatedBy: new FormControl('-1'),
    productEntityTemplateSectionId: new FormControl('')
  });
  constructor(private activateRoute: ActivatedRoute,
     private crmservicesService: CrmservicesService, private sweetAlert: SweetalertServiceService) {
    this.activateRoute.queryParams.subscribe((params: any) => {
      var parameter: any = params;
      this.tempId = parameter.data;
      this.getTabsIds(parameter.data != undefined ? parameter.data : -1, true);
      this.onOptionsSelected(this.tempId);
      this.AddTabs.controls["productEntityTemplateId"].patchValue(this.tempId);
    });
    this.crmservicesService.allProductEntityTemp().subscribe((data) => {
      this.allProductEntityTempidd = data;
      console.log(this.allProductEntityTempidd, 'iuytfds');
    })
  }
  onTypeChange(event) {
    if (event != 'Tab') {
      this.AddTabs.controls['type'].patchValue('Section');
      this.AddTabs.addControl('screenLayout', new FormControl('', Validators.required));
      this.AddTabs.addControl('parentId', new FormControl('', Validators.required));
    } else {
      this.AddTabs.controls['type'].patchValue('Tab');
      this.AddTabs.removeControl('screenLayout');
      this.AddTabs.removeControl('parentId');
    }
    this.typeTabDection = event;
  }

reset(){
  this.actionBtn = 'Add';
  this.AddTabs.controls['section'].reset();
  this.AddTabs.controls['sequenceId'].reset();
  // this.AddTabs.controls['parentId'].reset();
  // this.AddTabs.controls['screenLayout'].reset();
}

checkIfSection(){
  if(this.AddTabs.controls['type'].value=='Section'){
    this.AddTabs.controls['parentId'].patchValue('');
    this.AddTabs.controls['screenLayout'].patchValue('');
  }
}

  submit() {
    if (this.AddTabs.valid) {
      if (this.actionBtn != 'Update') {
        let list: any = []
        list.push(this.AddTabs.value)
        this.crmservicesService.addingTabs(list).subscribe(sucess => {
          this.reset();
          this.sweetAlert.RecordAddedStatic();

         if(this.AddTabs.controls['type'].value=='Tab'){
            this.getTabsID();
          }
          this.checkIfSection();
         
          this.changePageSortSearch(this.url);
        });
      } else {
        this.crmservicesService.putProductTemplateSection(this.AddTabs.value).
          subscribe(
             (res) => {
              this.reset();
              this.sweetAlert.RecordUpdatedStatic();
              this.changePageSortSearch(this.url);
              if(this.AddTabs.controls['type'].value=='Tab'){
                this.getTabsID();
              }
              this.checkIfSection();
            },
            error => {
              // alert("error while updating the record");
            
          })
      }
    } else {
      console.log(this.AddTabs);
      
    }
  }
  onOptionsSelected(value: string) {
    this.tempId = value;
    this.onTypeChange('Tab');
    this.actionBtn = 'Add';
    this.reset();
    this.getTabsIds(+value, false);
 this.getTabsID();
  }

  getTabsID(){
    this.crmservicesService.gettabId(this.tempId).subscribe(sucess => {
      this.tabid = sucess;
    });
  }
  getTabsIds(value: number, checkheader) {
    this.crmservicesService.getDataTable(value.toString() + this.url).subscribe((sucess: any) => {
      if (checkheader) {
        this.headerList = sucess.headerlist;
      }
      this.data = sucess.page;
    });
  }
  changePageSortSearch(url: any) {
    this.url = url;
    this.crmservicesService.getDataTable(this.tempId + '?' + url).subscribe(sucess => {
      this.data = sucess.page;
    }, error => { });
  }  
  buttonEvent1(event: any) {
    if (event.event == 'edit') {
      this.actionBtn = 'Update';
      this.onTypeChange(event.data.type);
      this.AddTabs.patchValue(event.data);
    } else if (event.event == 'add') {
      this.actionBtn = 'Add';
      this.onTypeChange('Tab');
      this.onOptionsSelected(this.tempId)
    }else if (event.event == 'delete') {
            this.crmservicesService.deleteProdTempSection(event.data.productEntityTemplateSectionId, 0).subscribe((res) => {
              this.sweetAlert.recordDeleted();
              this.changePageSortSearch(this.url);
            });
          }
  }
}
