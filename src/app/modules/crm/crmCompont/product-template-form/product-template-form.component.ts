import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { selectValidation } from 'src/app/modules/client/validators/validation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-template-form',
  templateUrl: './product-template-form.component.html',
  styleUrls: ['./product-template-form.component.scss', '../../crm/crm.component.scss']
})
export class ProductTemplateFormComponent {
  intialvalue: any;
  intialvalue1: any;
  modalRef: BsModalRef;
  productTemplate = new FormGroup({  
    productEntityTemplateId: new FormControl(""),
    productEntityTemplateName: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    description: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    productHierarchyId: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    screenLayout: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    numberOfTabPagesSections: new FormControl(0, [Validators.required, Validators.maxLength(100)]),
    version: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    productEntityType: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    state: new FormControl("", [Validators.required, Validators.maxLength(100)]),
    updatedBy: new FormControl(""),
    cretedBy: new FormControl("")
  });
  productEntityTypeList = [];
  productHierarchyIdList = [];
  actionBtn: string = "Save";
  tempId: string;

  constructor(private modalService: BsModalService, private service: CrmservicesService, private sweetAlert: SweetalertServiceService,
    private router: Router, private route: ActivatedRoute) {
      this.intialvalue1=this.AddTabs.value;
    this.service.getHrichyList().subscribe((sucess: any) => {
      this.productHierarchyIdList = sucess;
    });
    this.service.productEntityTypeList().subscribe((sucess: any) => {
      this.productEntityTypeList = sucess;
    });
    this.intialvalue = this.productTemplate.value;
    this.route.queryParams.subscribe((params: any) => {
      if (params.data != undefined) {
        this.actionBtn = "Update";
        this.getValueByID(params.data);

      }
    });
  }
  reset() {
    this.productTemplate.reset(this.intialvalue);
  }

  getValueByID(id) {
    this.service.productTemplate(id).subscribe((sucess: any) => {
      this.productTemplate.patchValue(sucess);
      this.intialvalue = this.productTemplate.value;
      this.getAllTemplateId();
      this.getTabsID(id);
      this.changePageSortSearch(this.url, true);
    })
  }

  get getControl() {
    return this.productTemplate.controls;
  }
  permission: any = [true, true, false];
  headerList: any = []
  data: any = {};
  url: String = "pageNo=1&pageSize=5";

  back(){
    this.router.navigate(['/crm/product-templates']);
  }
  submit() {
    if (this.actionBtn == "Save") {
      this.service.SaveProductTemplate(this.productTemplate.value).subscribe(
        (sucess: any) => {
          this.sweetAlert.RecordAddedStatic();
        this.router.navigate(['crm/product-template-form'], { queryParams: { data: JSON.stringify(sucess.productEntityTemplateId) } });
         
        });
    } else {
      this.service.updateProductTemplate(this.productTemplate.value).subscribe(
        (sucess: any) => {
          //this.sweetAlert.RecordUpdated('/crm/product-templates');
          this.sweetAlert.RecordUpdatedStatic();
        });
    }
  }

  changePageSortSearch(url: any, flag) {
    this.url = url;
    this.service.getDataTable(this.productTemplate.controls['productEntityTemplateId'].value + '?' + url).subscribe(sucess => {
      this.data = sucess.page;
      this.productTemplate.controls['numberOfTabPagesSections'].patchValue(sucess.page.totalElements)
      if (flag) {
        this.headerList = sucess.headerlist;
      }
    }, error => { });
  }
  buttonEvent1(event: any, template) {
    this.AddTabs.controls['productEntityTemplateId'].patchValue(this.productTemplate.controls['productEntityTemplateId'].value)
    if (event.event == 'edit') {
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
      this.service.getEntitytemplatesectionById(event.data.productEntityTemplateSectionId).subscribe((sucess: any) => {
        this.actionBtn1 = 'Update';
        this.onTypeChange(sucess.type);
        this.AddTabs.patchValue(sucess);
      });
    } else if (event.event == 'add') {
      this.reset1()
      this.actionBtn1 = 'Save';
      this.onTypeChange('Tab');
      this.typeTabDection = 'Tab';
      this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    } else if (event.event == 'inSidebtn') {
      if (event.btnEvent == 'Attributes') {
        this.router.navigate(['crm/product-attribute'] ,
        { queryParams: { data: JSON.stringify(event.data.productEntityTemplateId),
                       data1: JSON.stringify(event.data.productEntityTemplateSectionId),
                       data2: JSON.stringify(event.data.parentId)}});
      } else if (event.btnEvent == 'Delete') {
        this.DeleteRecord(event.data);
      }
    }
  }
  typeTabDection: String = 'Tab';
  tabid: any = [];
  allProductEntityTempidd = [];
  AddTabs = new FormGroup({
    productEntityTemplateId: new FormControl('', selectValidation),
    type: new FormControl('Tab', Validators.required),
    section: new FormControl('', Validators.required),
    sequenceId: new FormControl('', Validators.required),
    createdBy: new FormControl('-1'),
    updatedBy: new FormControl('-1'),
    productEntityTemplateSectionId: new FormControl('')
  });

  onTypeChange(event) {
    if (event != 'Tab') {
      this.AddTabs.controls['type'].patchValue('Section');
      this.AddTabs.addControl('screenLayout', new FormControl('', Validators.required));
      this.AddTabs.addControl('parentId', new FormControl('', Validators.required));
    }
    else {
      this.AddTabs.controls['type'].patchValue('Tab');
      this.AddTabs.removeControl('screenLayout');
      this.AddTabs.removeControl('parentId');
    }
    this.typeTabDection = event;
  }
  onOptionsSelected(value: string) {
    this.tempId = value;
    this.onTypeChange('Tab');
    this.actionBtn = 'Add';
  }
  getAllTemplateId() {
    this.service.allProductEntityTemp().subscribe((data) => {
      this.allProductEntityTempidd = data;
    })
  }

  getTabsID(id) {
    this.service.gettabId(id).subscribe(sucess => {
      this.tabid = sucess;
    });
  }
  actionBtn1 = 'Save';
  submit1() {
    if (this.AddTabs.valid) {
      if (this.actionBtn1 != 'Update') {
        let list: any = []
        list.push(this.AddTabs.value)
        this.service.addingTabs(list).subscribe(sucess => {
          this.changePageSortSearch(this.url, false);
          if (this.AddTabs.controls['type'].value == 'Tab') {
            this.getTabsID(this.productTemplate.controls['productEntityTemplateId'].value);
          }
          this.reset1();
          this.modalRef.hide();
          this.sweetAlert.RecordAddedStatic();
        });
      } else {
        this.service.putProductTemplateSection(this.AddTabs.value).subscribe(
          (res) => {
            this.modalRef.hide();
            this.sweetAlert.RecordUpdatedStatic();
            this.changePageSortSearch(this.url, false);
            if (this.AddTabs.controls['type'].value == 'Tab') {
              this.getTabsID(this.productTemplate.controls['productEntityTemplateId'].value);
             
            }
          },
          error => {
            // alert("error while updating the record");

          })
      }
    } else {
      console.log(this.AddTabs);

    }

   
  }
  reset1(){
    this.AddTabs.reset(this.intialvalue1);
    this.typeTabDection= 'Tab';
    this.AddTabs.controls['productEntityTemplateId'].patchValue(this.productTemplate.controls['productEntityTemplateId'].value)
  }

  DeleteRecord(data1) {
    let data = {
      event: 'delete',
     data: data1
    }
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete the data',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: "rgb(220, 53, 69)",
      confirmButtonText: 'Yes  ',
      showClass: {
        backdrop: 'swal2-noanimation', // disable backdrop animation
        popup: '',                     // disable popup animation
        icon: ''                       // disable icon animation
      },
      hideClass: {
        popup: '',                     // disable popup fade-out animation
      },
    }).then((result) => {
      if (result.value) {
        
        this.service.deleteProdTempSection(data1.productEntityTemplateSectionId, JSON.parse(sessionStorage.getItem('userDetails')).userId).subscribe((res) => {
          this.changePageSortSearch(this.url, false);
          this.sweetAlert.recordDeleted();
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(

          {
            title: 'Cancelled',
            text: 'Your data is safe.',
            confirmButtonText: 'OK',
            icon: 'success',
            
            showClass: {
              backdrop: 'swal2-noanimation', // disable backdrop animation
              popup: '',                     // disable popup animation
              icon: ''                       // disable icon animation
            },
            hideClass: {
              popup: '',                     // disable popup fade-out animation
            },
          }
        )
      }
    })
  }
}

