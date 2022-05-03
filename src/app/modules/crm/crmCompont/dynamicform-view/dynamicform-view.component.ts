import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AllservicesService } from 'src/app/modules/client/services/allservices.service';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-dynamicform-view',
  templateUrl: './dynamicform-view.component.html',
  styleUrls: ['./dynamicform-view.component.scss']
})
export class DynamicformViewComponent implements OnInit {
  detailsForm: any;
  isSection: String="";
  prodEntityTemplateId:number;
  version: any;
  constructor(private allService:CrmservicesService, private activateRoute: ActivatedRoute ) {
    this.activateRoute.queryParams.subscribe(data =>{
      this.prodEntityTemplateId = data.id;
      this.version = data.version;
      this.allService.getsectionFrom(this.prodEntityTemplateId).subscribe((data:any)=>{
        this.detailsForm=data;
        this.isSection=data.page[0].tabSections[0].section.type;
        }); 
    });
  }
  ngOnInit(): void {
    
  }}
