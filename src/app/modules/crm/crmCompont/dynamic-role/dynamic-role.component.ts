import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrmservicesService } from '../../crm-services/crmservices.service';

@Component({
  selector: 'app-dynamic-role',
  templateUrl: './dynamic-role.component.html',
  styleUrls: ['./dynamic-role.component.scss']
})
export class DynamicRoleComponent implements OnInit {

  @Input() alluserrolesdata = [];
  @Input() SelectedArray = [];
  @Output() exportSelectedArray= new EventEmitter<any>();
  avlId: any = [];
  rmId: any = [];
  constructor(private service: CrmservicesService) {
  }
  ngOnInit(): void {
  }
  addSelected() {
    if(this.rmId.length!=0 && this.rmId!=undefined){
      alert("please Performe one action");
    }else{
      this.SelectedArray = this.SelectedArray.concat(this.avlId);
      for (let k = 0; k < this.avlId.length; k++) {
        let index = this.alluserrolesdata.indexOf(this.avlId[k]);
        this.alluserrolesdata.splice(index, 1);
      }
      this.avlId = [];
      this.exportSelectedArray.emit(this.SelectedArray);
    }

    
  }
  removeSelected() {
    if(this.avlId.length!=0 && this.avlId!=undefined){
alert("please Performe one action");
    }else{
      this.alluserrolesdata = this.alluserrolesdata.concat(this.rmId);
      for (let k = 0; k < this.rmId.length; k++) {
        let index = this.SelectedArray.indexOf(this.avlId[k]);
        this.SelectedArray.splice(index, 1);
      }
      this.rmId = [];
      this.exportSelectedArray.emit(this.SelectedArray);
    }
  }
  selectedArrayAvailable(roles) {
    var index = this.avlId.indexOf(roles)
    if (index != -1) {
      this.avlId.splice(index, 1);
    } else {
      this.avlId.push(roles);
    }
  }

  removeArrayAvailable(roles) {
    var index = this.rmId.indexOf(roles)
    if (index != -1) {
      this.rmId.splice(index, 1);
    } else {
      this.rmId.push(roles);
    }
  }
  getDataClass(roles) {
    if (this.avlId.includes(roles)) {
      return true;
    } else {
      return false;
    }
  }

  getRmDataClass(roles) {
    if (this.rmId.includes(roles)) {
      return true;
    } else {
      return false;
    }
  }

}
