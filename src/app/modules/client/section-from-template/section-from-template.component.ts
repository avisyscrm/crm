import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../services/allservices.service';

@Component({
  selector: 'app-section-from-template',
  templateUrl: './section-from-template.component.html',
  styleUrls: ['./section-from-template.component.scss']
})
export class SectionFromTemplateComponent implements OnInit {

  type: any="";

  constructor(private allservice:AllservicesService) { }
  data:any;
  ngOnInit(): void {
    this.allservice.isStringUrl.subscribe(sucess=>{
      this.allservice.getFromData(sucess).subscribe(sucess1=>{
        this.type=sucess1?.page[0].section?.type;
        this.data=sucess1;
      })
    })
  }

}
