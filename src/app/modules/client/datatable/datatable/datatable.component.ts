import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ColumnComponent } from '../column/column.component';
import { DataTableModel } from '../datatableModel';
import { SelectRecord } from '../../../client/sweetalert/sweetalert';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  providers: [DataTableModel]
})
export class DatatableComponent implements OnInit {

  x: number | undefined;
  length: number | undefined;
  checkBoxV: boolean = false;
  sortval: any;
  pageSize: any = 5;
  content: any = [];
  serchingParmeter: string | undefined;
  sortKey: string = "";
  sortType: String = 'ASC';
  selectedData: any = null;
  ngOnChanges(changes: SimpleChanges): void {
    this.sortKey = this.dataset?.sortObjects?.key;
    this.selectedData = null;
    this.sortType = this.dataset?.sortObjects?.value;
    let dataset1: any = this.dataset;
    this.content = this.dataset.content;
  }
  id1: any;

  @Input() data: ((searchTerm: string) => Observable<any[]>) | undefined;
  @Input() dataset: any = {};
  @Input() permission: any = [];
  @Input() checkedArray = [];


  @Output() changePageSortSearch = new EventEmitter<any>();


  @Output() buttonEvent1 = new EventEmitter<any>();

  rowsOnPage: any;
  result: number = 0;
  qtd = [];
  columns: ColumnComponent[] = [];
  query = "";
  filteredList = [];
  pageno: number = 1;
  count: any = 0;
  totalPageCount = [];
  options: any;
  currentPage: number = 1;
  sortColumnNo: number | undefined;
  recordsFiltered = 0;
  pageentry: any;
  start: number = 0;
  sortorder: any = 0;

  getCheck(data: any) {
    // debugger
    var check = false;
    for (var i = 0; i < this.checkedArray.length; i++) {
      if (data == this.checkedArray[i]) {

        check = true;
        break
      } else {
        check = false;
      }
    }
    return check;
  }


  ngOnInit() {
  }
  constructor(public datatableEntity: DataTableModel) {

  }


  confirmDelete() {
    let data = {
      event: 'delete',
      data: this.selectedData
    }
    this.buttonEvent1.emit(data);
    let deletemodal = document.getElementById('openModalforDelete');
    deletemodal.style.display = 'none';

  }
  addColumn(column: ColumnComponent) {
    this.columns.push(column);
  }
  chnagePageNo(event: any) {
    this.pageno = event;
    this.createUrl();

  }

  sorting(column: any) {

    if (this.sortKey == column) {
      this.sortType = this.sortType == "ASC" ? 'DESC' : 'ASC';
    } else {
      this.sortKey = column;
      this.sortType = 'ASC';
    }
    this.pageno = 1;
    this.createUrl();
    //  this.changePageSortSearch.emit("pageNo=1&pageSize="+this.dataset?.pageable?.pageSize+"&sort="+column+"&sort=asc");

  }

  changeFn(newValue: any) {
    this.pageno = 1;
    this.createUrl();
    // console.log([this.pageno],'pageno');
    // console.log(this.createUrl,'createurl');
    console.log(newValue, 'keyyo');

  }
  pageChane() {
    this.pageno = 1;
    this.createUrl();
  }

  createUrl() {
    let url = "pageNo=" + this.pageno + "&pageSize=" + this.pageSize;
    if (this.serchingParmeter != "" && this.serchingParmeter != undefined && this.serchingParmeter != null) {
      url = url + "&search=" + this.serchingParmeter;
    }


    if (this.sortKey != "" && this.sortKey != null && this.sortKey != undefined) {
      url = url + "&sort=" + this.sortKey + "&sort=" + this.sortType.toLowerCase();
    }
    this.changePageSortSearch.emit(url);
  }


  buttonEvent(event: string) {
    let data = {
      event: event,
      data: event == 'add' ? null : this.selectedData
    }

    if (event == 'edit' || event == 'delete') {
      if (this.selectedData != "" && this.selectedData != undefined && this.selectedData != null && this.selectedData != {}) {

        if (event == 'delete') {
          // let deletemodal = document.getElementById('openModalforDelete');
          // deletemodal.style.display='block';
          this.DeleteRecord();
        }
        else {
          this.buttonEvent1.emit(data);
        }
        return;
      } else {
        SelectRecord();
        return
      }
    }
    this.buttonEvent1.emit(data);

  }

  btnEventInside(value:any,btnvalue){
    let data = {
      event: 'inSidebtn',
      data: value,
      btnEvent:btnvalue
    }
    this.buttonEvent1.emit(data);
  }
  radioButton(value: any) {
    this.selectedData = value;

  }

  DeleteRecord() {
    let data = {
      event: 'delete',
      data: this.selectedData
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
        
        this.buttonEvent1.emit(data);
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
