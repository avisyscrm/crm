import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-product-entity-type',
  templateUrl: './product-entity-type.component.html',
  styleUrls: ['./product-entity-type.component.scss']
})
export class ProductEntityTypeComponent implements OnInit {
  permission: any = [true, true, true];
  headerList: any = [];
  url: string = "pageNo=1&pageSize=5";
  constructor(private allService: CrmservicesService, private router: Router, private sweetAlert: SweetalertServiceService) { }
  data: any = {};
  ngOnInit(): void {
    this.allService.getProductEntity("pageNo=1&pageSize=5").subscribe((sucess:any) => {
      this.headerList = sucess.headerlist;
      this.data = sucess.page;
    }, error => {}
    );
  }
  changePageSortSearch(url: any) {
    this.url = url;
    this.allService.getProductEntity(url).subscribe((sucess:any) => {
      this.data = sucess.page;
    }, error => {
    }
    );
  }
  onDelete() {
    this.allService.getProductEntity(this.url).subscribe((sucess: any) => {
      this.data = sucess.page;
    }, error => {
    }
    );
  }
  buttonEvent1(data: any) {
    if (data.event == 'add') {
      this.router.navigate(['crm/crm/product-entity-type-from']);
    } else if (data.event == 'edit') {
      this.router.navigate(['crm/crm/product-entity-type-from'], { queryParams: { data: JSON.stringify(data.data.productEntityTypeId) } });
      console.log(data, 'data')
    }
    else if (data.event == 'delete') {
      this.allService.deleteEntityType(data.data.productEntityTypeId).subscribe((res) => {
        this.sweetAlert.recordDeleted();
        this.onDelete();
      })
    }

  }


}
