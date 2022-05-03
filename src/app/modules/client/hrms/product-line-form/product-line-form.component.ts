import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { onlyChar, selectValidation } from '../../validators/validation';
import { AllservicesService } from '../../services/allservices.service';

@Component({
  selector: 'app-product-line-form',
  templateUrl: './product-line-form.component.html',
  styleUrls: ['./product-line-form.component.scss']
})
export class ProductLineFormComponent implements OnInit {

  constructor(private service: AllservicesService, private router:Router, private route: ActivatedRoute) { }
  @ViewChild('file') myFileInput: any;
  private parameter: any;
  prodId: any;
  data: any;
  actionBtn: string = "Save";
  isupdate: boolean = false;
  productfamIDslist: any;
  productLineIcons: any;
  file: any;

  ngOnInit(): void {

    this.route.queryParams.subscribe((params: any) => {

      this.parameter = params;
      this.prodId = this.parameter.data;
      console.log(this.prodId, 'fam');
      console.log(params, 'para');

    })


    if (this.prodId != undefined)
      this.actionBtn = "Update";
    this.service.getLineId(this.prodId).subscribe(res => {
      this.data = res;
      console.log(res);


      if (this.data) { 
        // this.actionBtn ="Update"
        this.isupdate = true;

        this.addProductLine.controls['productFamilyId'].setValue(this.data.productFamilyId);
        this.addProductLine.controls['productLineId'].setValue(this.data.productLineId);
        this.addProductLine.controls['productLine'].setValue(this.data.productLine);
        this.addProductLine.controls['description'].setValue(this.data.description);
        this.addProductLine.controls['productLineIcon'].setValue(this.data.productLineIcon);
        this.productLineIcons = this.data.productLineIcon;
      }

    })


    this.service.productFamilyIDs().subscribe((data: any) => {
      this.productfamIDslist = data;
    })



  }

  addProductLine = new FormGroup({
    productFamilyId: new FormControl('', selectValidation),
    productLineId: new FormControl(''),
    productLine: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]),
    description: new FormControl('', [Validators.required, Validators.maxLength(400), Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), onlyChar]),
    productLineIcon: new FormControl(''),
    createdBy: new FormControl('-1'),
    updatedBy: new FormControl('99')
  })

  resetForm() {

    this.addProductLine.controls['productFamilyId'].setValue("");
    this.addProductLine.controls['productLine'].reset();
    this.addProductLine.controls['description'].reset();

  }

  submit() {
    if (this.isupdate) {
      this.addProductLine.valid ? this.updateProductLine() : "";
      this.resetForm();

    }
    else if (this.addProductLine.valid) {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('productLine', JSON.stringify(this.addProductLine.value))
      this.service.productLinePost(formData).subscribe((res) => {
        alert("Record Added");
        console.log(res);
        
        this.resetForm();
        this.router.navigate(['hr-users']); 
        },
        (error) => {
          alert(error)
        })

      // this.addproductLine();
    }
  }


  addproductLine() {
    console.log(this.addProductLine.value);

    this.service.postLineControler(this.addProductLine.value).subscribe((result) => {
      console.log('getdatapost', result);
      // this.addProductLine.reset();
      alert('Record Added');
    })
  }

  updateProductLine() {
    const formData = new FormData();
      formData.append('file', this.file);
      formData.append('productLine', JSON.stringify(this.addProductLine.value));
    console.log(this.addProductLine, 'hrsh');

    this.service.putProductLine(formData).
      subscribe({
        next: (res) => {
          alert("Record Updated successfully");
          this.resetForm();
          this.router.navigate(['hr-users']); 
        },
        error: () => {
          alert("error while updating the record");
        }
      })

    // get firstName(){ 
    //   return this.addProductLine.get('productLine');
    // }
  }

  get productLine() {
    return this.addProductLine.get('productLine');
  }

  get description() {
    return this.addProductLine.get('description');
  }

  get productLineIcon() {
    return this.addProductLine.get('description');
  }

  // File
  onFileSelect(event: any) {

    if (event.target.files.length > 0) {
      this.file = event.target.files.item(0);
      // alert("file"+this.file);
      var reader = new FileReader();
      reader.readAsDataURL(this.file); 
      reader.onload = (_event) => { 
        this.productLineIcons = reader.result; 
      }

    }
  }
  //


}
