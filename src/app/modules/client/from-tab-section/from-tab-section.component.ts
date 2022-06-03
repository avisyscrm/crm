import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
@Component({
  selector: 'app-from-tab-section',
  templateUrl: './from-tab-section.component.html',
  styleUrls: ['./from-tab-section.component.scss']
})
export class FromTabSectionComponent {
  @Input() fromDetailsTab: any;
  @Input() version: any;
  activeTab = "";
  tabFrom: any;
  activeTabId: number;
  constructor(private router: Router, private formBuilder: FormBuilder, private service: CrmservicesService, private toastr: ToastrService) { }
  activetabsec(activetab: any, data) {
    this.activeTab = activetab.section;
    let tabId = data.tabSections[0].section.components[0].tabId;
    this.setTabValue(tabId);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.tabFrom = this.formBuilder.group({});
    for (let k = 0; k < this.fromDetailsTab.page.length; k++) {
      this.tabFrom.addControl(this.fromDetailsTab.page[k]?.section?.section, new FormGroup({}));
      for (let l = 0; l < this.fromDetailsTab.page[k]?.tabSections?.length; l++) {
        for (let j = 0; j < this.fromDetailsTab.page[k]?.tabSections[l].section.components.length; j++) {
        let validator=[];
           if(this.fromDetailsTab.page[k]?.tabSections[l].section.components[j].validator.includes('Validators.mandatory')){
            validator.push(Validators.required);
           }
          this.tabFrom.get(this.fromDetailsTab.page[k].section.section)
            .addControl(this.fromDetailsTab.page[k]?.tabSections[l]?.section.components[j]?.productAttribute,
              new FormControl(this.fromDetailsTab.page[k]?.tabSections[l]?.section.components[j]?.defaultValue, validator));
        }
      }
    }
    
    this.activeTab = this.fromDetailsTab?.page[0]?.section.section;
   // let templateId = this.fromDetailsTab?.page[0].tabSections[0].section.components[0].productEntityTemplateId;
    let tabId = this.fromDetailsTab?.page[0].tabSections[0].section.components[0].tabId;
    this.setTabValue(tabId);

  }
  setTabValue(tabId) {
    
    if(this.version != undefined){
      
      this.service.gettabEditData(this.fromDetailsTab.page[0].section.productEntityTemplateId, tabId, this.version).subscribe((data: any) => {
        this.tabFrom.get(this.activeTab).patchValue(data.templateData);
      });
    }
  }
  submit(data: any, ids: any) {
    if (this.tabFrom?.get(data).valid) {
      
    //  const saveData = new DynamicForm(ids.productEntityTemplateId, ids.tabId, this.tabFrom.get(data).value)
    var savedata:any ={
      templateId:this.fromDetailsTab.page[0].section.productEntityTemplateId,
      tabId:ids.tabId,
      templateData:this.tabFrom.get(data).value
    }
    this.service.postDynamicData(savedata).subscribe((res: any) => {
      this.version = res.version;
      this.toastr.success("Record Added");
    },
      (error) => {
        this.toastr.error(error);
      })
    }else{
      for (const key in this.tabFrom.get(data).controls) {
        if (this.tabFrom.get(data).controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>this.tabFrom.get(data).controls[key];

          if (Object.keys(control).includes('controls')) {
            const formGroupChild: FormGroup = <FormGroup>this.tabFrom.get(data).controls[key];
          }
          control.markAsTouched();
        }
      }
      this.toastr.error("Please Fill All Required Field");
    }
  }
  checkBoxValue(event, tabSection, control) {
    if (event.target.checked) {
      this.tabFrom.get(tabSection).controls[control].patchValue(this.getValue(this.tabFrom.get(tabSection).controls[control].value, event.target.value));
    } else {
      let a=this.tabFrom.get(tabSection).controls[control].value.split(',');
      let index= a.findIndex(x => x === event.target.value);    //a.findIndex(event.target.value)
      a.splice(index,1);
      let l="";
      for(let k=0;k<a.length;k++){
        l=l+","+a[k];
        this.tabFrom.get(tabSection).controls[control].patchValue(l)
      }
    }
  }
  getValue(value: any, value1): any {
    if (value != "") {
      return value + "," + value1;
    } else {
      return value1
    }
  }
  return(value, tabSection, control) {
    let valueInController = this.tabFrom.get(tabSection).controls[control].value;
    let a = valueInController.split(",");
    if (a?.includes(value)) {
      return true;
    }
    return false;
  }

  ngClass(componat){
    if(componat.validator.includes('Validators.mandatory')){
    return true; 
    }else{
    return "";
    }
  }
  get getControl() {
    return this.tabFrom.get(this.activeTab).controls;
  }
}


