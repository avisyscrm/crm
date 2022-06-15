import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrmservicesService } from '../../crm-services/crmservices.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-templates',
  templateUrl: './product-templates.component.html',
  styleUrls: ['./product-templates.component.scss']
})
export class ProductTemplatesComponent {

  permission: any = [true, true, true];
  headerList: any = [];
  url = "pageNo=1&pageSize=5";
  constructor(private allService: CrmservicesService, private router: Router,
    private sweetAlert: SweetalertServiceService) {
    this.allService.getEntityTemplate("pageNo=1&pageSize=5").subscribe(sucess => {
      this.headerList = sucess.headerlist;
      this.data = sucess.page;
    }, error => {

    }
    );
  }
  data: any = {};
  changePageSortSearch(url: any) {
    this.url=url;
    this.allService.getEntityTemplate(url).subscribe(sucess => {
      this.data = sucess.page;
    }, error => {

    }
    );
    console.log(url, 'dattaaa')
  }


  buttonEvent1(data: any) {
    if (data.event == 'add') {
      this.router.navigate(['crm/crm/product-template-form']);
    }
    else if (data.event == 'edit') {
      this.router.navigate(['crm/crm/product-template-form'], { queryParams: { data: JSON.stringify(data.data.productEntityTemplateId) } });
      console.log(data, 'data')
    }
    else if (data.event == 'delete') {
      this.allService.deleteProductTemplate(data.data.productEntityTemplateId, 0).subscribe((res) => {
        this.sweetAlert.recordDeleted();
        this.changePageSortSearch(this.url);
      })
    }


  }


}
