import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { selectValidation } from '../../../client/validators/validation';
@Component({
  selector: 'app-product-tabs-form',
  templateUrl: './product-tabs-form.component.html',
  styleUrls: ['./product-tabs-form.component.scss','../../crm/crm.component.scss']
})
export class ProductTabsFormComponent implements OnInit {
  selcted="External details";
  permission: any = [true, true, true];
  tabForm: boolean = true;
  sectionForm: boolean = false;
  allProductEntityTempidd: any;
  arraydata: FormData[] = [];
  listData: any = [];
  AddTabs: FormGroup;
  item: any;
  data: any = {};
  tabid: any = [];
  tempidd: any;
  templateId: any;
  parameter: any;
  tempId: any;
  actionBtn: string = "Add";
  updateId: any;
  prodTemplateSecId: any;
  ajayStri: any;
  pageNo: any;
  pageSize: any;
  sortBy: any;
  sortDirection: any;

  constructor(private service: CrmservicesService, private fb: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
    this.AddTabs = this.fb.group({
      productEntityTemplateId: new FormControl('', selectValidation),
      type: new FormControl('Tab', Validators.required),
      section: new FormControl('', Validators.required),
      sequenceId: new FormControl('', Validators.required),
      screenLayout: new FormControl('',),
      createdBy: new FormControl('-1', Validators.required),
      updatedBy: new FormControl('-1', Validators.required),
      parentId: new FormControl('',),
      productEntityTemplateSectionId: new FormControl('')
    });
  }
  resetForm() {
    this.AddTabs.controls['updatedBy'].setValue('-1');
    this.AddTabs.controls['createdBy'].setValue('-1');
    this.AddTabs.controls['section'].setValue('');
    this.AddTabs.controls['sequenceId'].setValue('');
    this.AddTabs.controls['screenLayout'].setValue('');
    this.AddTabs.controls['parentId'].setValue('');
  }
  ngOnInit(): void {
    this.getheader(-1);
    this.activateRoute.queryParams.subscribe((params: any) => {
      this.parameter = params;
      console.log(this.parameter);
      this.tempId = this.parameter.data;
      this.updateId = this.parameter.data;     
      this.AddTabs.controls["productEntityTemplateId"].patchValue(this.parameter.data)
    })
    this.service.allProductEntityTemp().subscribe((data) => {
      this.allProductEntityTempidd = data;
      console.log(this.allProductEntityTempidd, 'iuytfds');
    })
    if (this.updateId) {
      this.actionBtn = "Update";
      this.getTabsIds(this.updateId);
    }
  }

  submit() {
    if (this.updateId) {
      this.updateSectionTab();
    }else {
      this.Additem();
    }
  }
  checkForm(selectOp: string) {
    this.AddTabs.controls['section'].reset();
    this.AddTabs.controls['sequenceId'].reset();
    if (selectOp == 'Tab') {
      this.tabForm = true;
      this.sectionForm = false;
      this.resetForm();
      let sceernLayout = this.AddTabs.get("screenLayout");
      let parentId = this.AddTabs.get("parentId");
      sceernLayout.clearValidators();
      parentId.clearValidators();
      this.AddTabs.controls["screenLayout"].setValue('');
      this.AddTabs.controls["parentId"].setValue('');
    }else if (selectOp == 'Section') {
      this.tabForm = false;
      this.sectionForm = true;
      this.tempId = this.AddTabs.value.productEntityTemplateId;
       this.service.gettabId(this.tempId).subscribe(sucess => {
        this.tabid = sucess;
        this.AddTabs.controls['parentId'].patchValue(this.AddTabs.controls['parentId'].value);
      });
      this.AddTabs.controls["screenLayout"].setValidators(Validators.required);
      this.AddTabs.controls["parentId"].setValidators(Validators.required);
    }}

//123
    checkForm1(selectOp: string,data:any) {
      this.AddTabs.controls['section'].reset();
      this.AddTabs.controls['sequenceId'].reset();
      if (selectOp == 'Tab') {
        this.tabForm = true;
        this.sectionForm = false;
        this.resetForm();
        let sceernLayout = this.AddTabs.get("screenLayout");
        let parentId = this.AddTabs.get("parentId");
        sceernLayout.clearValidators();
        parentId.clearValidators();
        this.AddTabs.controls["screenLayout"].setValue('');
        this.AddTabs.controls["parentId"].setValue('');
         this.AddTabs.patchValue(data);   
      }else if (selectOp == 'Section') {
        this.tabForm = false;
        this.sectionForm = true;
        this.tempId = this.AddTabs.value.productEntityTemplateId;
         this.service.gettabId(this.tempId).subscribe(sucess => {
          this.tabid = sucess;
        //  this.AddTabs.controls['parentId'].patchValue(this.AddTabs.controls['parentId'].value);
           this.AddTabs.patchValue(data);   
        });
        this.AddTabs.controls["screenLayout"].setValidators(Validators.required);
        this.AddTabs.controls["parentId"].setValidators(Validators.required);
      }}

  onOptionsSelected(value: string) {
    this.tempId = value;
    this.getTabsIds(+value);
    this.service.gettabId(this.tempId).subscribe(sucess => {
      this.tabid = sucess;
    });
  }
  onDataUpdate(templateId: any) {
    this.service.getDataTable(templateId + '?pageNo=1&pageSize=5').subscribe((sucess: any) => {
      this.data = sucess.page;
    });
  }
 getheader(value: number) {
    this.service.getDataTable(value + '?pageNo=1&pageSize=5').subscribe((sucess: any) => {
      this.headerList = sucess.headerlist;
      this.data = sucess.page;
    });
  }
  getTabsIds(value: number) {
    this.service.getDataTable(value + '?pageNo=1&pageSize=5').subscribe((sucess: any) => {
      this.data = sucess.page;
    });
  }
  public Additem(): void {
    console.log(this.AddTabs);
    console.log(this.AddTabs.value);
    if (this.AddTabs.valid) {
      var list: any = [];
      list.push(this.AddTabs.value)
      this.saveData(list);
      this.getTabsIds(this.tempId);
    } else {
      alert("Please enter valid fields");
    }
  }
  // update service
  updateSectionTab() {
    console.log(JSON.stringify(this.AddTabs.value) + "  updateTell");
    console.log(this.AddTabs.controls['productEntityTemplateId'].value + "   template id");
    this.onDataUpdate(this.AddTabs.controls['productEntityTemplateId'].value);
    this.service.putProductTemplateSection(this.AddTabs.value).
      subscribe({
        next: (res) => {
          alert("Record Updated");
          this.resetForm();
          this.getTabsIds(this.tempId);
        },
        error: () => {
          alert("error while updating the record");
        }
      })
  }
  saveData(list: any) {
    this.service.addingTabs(list).subscribe(sucess => {
      alert("Record Added");
      this.resetForm();
      this.getTabsIds(this.tempId)
    })
  }
  async buttonEvent1(data: any) {
    if (data.event == 'add') {
      this.resetForm();
      this.actionBtn = "Add";
      this.resetForm();
      this.updateId = "";
    } else if (data.event == 'edit') {
      //this.AddTabs.patchValue(data.data);   
      this.checkForm1(data.data.type,data.data);  
      this.updateId = data.data.productEntityTemplateSectionId;
      this.actionBtn = "Update";
    }else if (data.event == 'delete') {
      this.service.deleteProdTempSection(data.data.productEntityTemplateSectionId, data.data.updatedBy).subscribe((res) => {
        alert('Record Deleted');
        this.getTabsIds(data.data.productEntityTemplateId);
        this.onDelete(data.data.productEntityTemplateId);
      });
    }}
  onDelete(value: any) {
    this.service.getDataTable(value + "?pageNo=" + this.pageNo + "&pageSize=" + this.pageSize).subscribe(sucess => {
      this.data = sucess.page;
    }, error => {});
  }
  changePageSortSearch(url: any) {
    this.ajayStri = "" + url.toString();
    var splittedpaging = this.ajayStri.split('&', 4);
    this.pageNo = splittedpaging[0].substring(splittedpaging[0].indexOf("=") + 1, splittedpaging[0].length);
    this.pageSize = splittedpaging[1].substring(splittedpaging[1].indexOf("=") + 1, splittedpaging[1].length);
    this.sortBy = splittedpaging[2].substring(splittedpaging[2].indexOf("=") + 1, splittedpaging[2].length);
    this.sortDirection = splittedpaging[3].substring(splittedpaging[3].indexOf("=") + 1, splittedpaging[3].length);
    this.service.getDataTable(this.tempId + '?' + url).subscribe(sucess => {
      this.data = sucess.page;
    }, error => {});
  }

  headerList: any = []
  delete(i: any) {
    this.listData.splice(i, 1);
  }
  edit(items: any) {
    this.AddTabs.patchValue(items);
  }}
