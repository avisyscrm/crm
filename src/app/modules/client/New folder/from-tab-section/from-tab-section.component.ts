import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
import { DynamicForm } from '../dynamicForm';
@Component({
  selector: 'app-from-tab-section',
  templateUrl: './from-tab-section.component.html',
  styleUrls: ['./from-tab-section.component.scss']
})
export class FromTabSectionComponent implements OnInit {
  @Input() fromDetailsTab: any;
  @Input() version: any;
  activeTab = "";
  tabFrom: any;
  activeTabId: number;
  versionofRecord:any;
  constructor(private formBuilder: FormBuilder, private service: CrmservicesService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  activetabsec(activetab: any,data) {
    this.activeTab = activetab.section;
    let templateId =data.tabSections[0].section.components[0].productEntityTemplateId;
    let tabId = data.tabSections[0].section.components[0].tabId;
  this.setTabValue(templateId,tabId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tabFrom = this.formBuilder.group({});
    for (let k = 0; k < this.fromDetailsTab.page.length; k++) {
      this.tabFrom.addControl(this.fromDetailsTab.page[k]?.section?.section, new FormGroup({}));
      for (let l = 0; l < this.fromDetailsTab.page[k]?.tabSections?.length; l++) {
        for (let j = 0; j < this.fromDetailsTab.page[k]?.tabSections[l].section.components.length; j++) {
          this.tabFrom.get(this.fromDetailsTab.page[k].section.section)
            .addControl(this.fromDetailsTab.page[k]?.tabSections[l]?.section.components[j]?.productId,
              new FormControl(this.fromDetailsTab.page[k]?.tabSections[l]?.section.components[j]?.value, Validators.required));
        }
      }
    }
    this.activeTab = this.fromDetailsTab?.page[0]?.section.section;
    let templateId = this.fromDetailsTab?.page[0].tabSections[0].section.components[0].productEntityTemplateId;
    let tabId = this.fromDetailsTab?.page[0].tabSections[0].section.components[0].tabId;
    this.setTabValue(templateId, tabId);

  }


  setTabValue(templateId, tabId) {
    this.service.gettabEditData(templateId, tabId, this.version).subscribe((data: any) => {
      this.tabFrom.get(this.activeTab).patchValue(data.templateData);
    });
  }


  submit(data: any, ids: any) {

    const saveData = new DynamicForm(ids.productEntityTemplateId, ids.tabId, this.tabFrom.get(data).value)
    this.service.postDynamicData(saveData).subscribe((res) => {
      this.versionofRecord = res;
     this.version=this.versionofRecord.version;
    },
      (error) => {
        console.log(error);
      })
  }



}


