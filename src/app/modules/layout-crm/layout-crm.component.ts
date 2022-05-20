import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-crm',
  templateUrl: './layout-crm.component.html',
  styleUrls: ['./layout-crm.component.scss']
})
export class LayoutCrmComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    var data=document.getElementById('page_top')
    data.classList.add('top_dark')
  }

}
