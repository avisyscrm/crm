import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  activeSection(dataProp:string){
    sessionStorage.setItem('dataProp',dataProp);
    this.router.navigate(['/crm']);
    // alert()
  }


}
