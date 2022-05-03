import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrmservicesService } from '../../crm/crm-services/crmservices.service';
import { DynamicForm } from '../dynamicForm';

@Component({
  selector: 'app-from-section',
  templateUrl: './from-section.component.html',
  styleUrls: ['./from-section.component.scss']
})
export class FromSectionComponent {
  @Input() fromDetails: any = {};
  @Input() version: any;
  sectionFromDetails: any = {};
  myForm = new FormGroup({});
  constructor(private service: CrmservicesService,private toastr: ToastrService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.fromDetails?.page != undefined) {
      for (let j = 0; j < this.fromDetails?.page?.length; j++) {
        for (let i = 0; i < this.fromDetails?.page[j]?.section?.components?.length; i++) {
          this.myForm.addControl(this.fromDetails.page[j]?.section?.components[i]?.productAttribute,
            new FormControl(this.fromDetails.page[j]?.section?.components[i]?.value, Validators.required));
        }
      }
      let templateId = this.fromDetails?.page[0].tabSections[0].section.components[0].productEntityTemplateId;
      let tabId = this.fromDetails?.page[0].tabSections[0].section.components[0].tabId;
      this.service.gettabEditData(templateId, tabId, this.version).subscribe((data: any) => {
        this.myForm.patchValue(data.templateData);
      });
      this.sectionFromDetails = this.fromDetails;
    }
  }
  get getControl() {
    return this.myForm.controls;
  }
  submit(myForm: FormGroup) {
    if (this.myForm.valid) {
      let templateId = this.fromDetails?.page[0].tabSections[0].section.components[0].productEntityTemplateId;
      let tabId = this.fromDetails?.page[0].tabSections[0].section.components[0].tabId;
      const saveData = new DynamicForm(templateId, tabId, this.myForm.value)
      this.service.postDynamicData(saveData).subscribe((res: any) => {
        this.version = res.version;
        this.toastr.success("Record Added Sucessfully...");
      },
        (error) => {
          // console.log(error);
          this.toastr.error(error);
        })
    } else {
      for (const key in myForm.controls) {
        if (myForm.controls.hasOwnProperty(key)) {
          const control: FormControl = <FormControl>myForm.controls[key];

          if (Object.keys(control).includes('controls')) {
            const formGroupChild: FormGroup = <FormGroup>myForm.controls[key];
          }
          control.markAsTouched();
        }
      }
    }
  }
}