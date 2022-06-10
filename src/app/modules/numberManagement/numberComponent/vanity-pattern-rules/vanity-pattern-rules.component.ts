import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetalertServiceService } from 'src/app/modules/client/sweetalert/sweetalert-service.service';
import { NumberservicesService } from '../../numberServices/numberservices.service';

@Component({
  selector: 'app-vanity-pattern-rules',
  templateUrl: './vanity-pattern-rules.component.html',
  styleUrls: ['./vanity-pattern-rules.component.scss','../../numberManagement.scss']
})
export class VanityPatternRulesComponent {
  intialvalue: any;
  actionBtn = "Save";
  @ViewChild('file1') myInputVariable:ElementRef;
  vanityPatternRule = new FormGroup({
    'ruleCodeId': new FormControl(''),
    'ruleCode': new FormControl('',[Validators.required]),
    'type': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    'mask': new FormControl('', [Validators.required, Validators.maxLength(100)]),
    'maskSequence': new FormControl(false, Validators.required),
    'length': new FormControl('',Validators.required),
    'numberOccurence': new FormControl('',Validators.required),
    'reverseCheck': new FormControl(false),
  });

  constructor( private alertService: SweetalertServiceService, private route: ActivatedRoute,private allService:NumberservicesService,private router: Router) {
      this.intialvalue = this.vanityPatternRule.value;
      this.route.queryParams.subscribe((params: any) => {
        if (params.data != undefined) {
          this.actionBtn = "Update";
          this.getValueByID(params.data);
          // this.vanityPatternRule.addControl['numberSchemeId'].disable();
          // this.vanityPatternRule.addControl['blockName'].disable();
        }
      });
  }

  submit(){
    console.log(JSON.stringify(this.vanityPatternRule.value));
    alert(JSON.stringify(this.vanityPatternRule.value));
    if(this.actionBtn == 'Save') {
      console.log('Block add called');
      this.allService.postVanityPatterRule(this.vanityPatternRule.getRawValue()).subscribe((res:any)=>{
        if(res.statusCode == 23505){
          this.alertService.SelectRecord("Vanity Pattern Rule already exist");
        }else{
          this.resetForm();
          this.alertService.RecordAdded('/number/vanityPatternTable');
        }
      },(error)=>{
        console.log(error);
      })
      return false;
    }
    if(this.actionBtn =='Update') {
      console.log(this.vanityPatternRule.getRawValue());
      this.allService.updateVanityPatterRule(this.vanityPatternRule.getRawValue()).subscribe(
        (sucess: any) => {
          this.alertService.RecordUpdatedStatic();
          this.vanityPatternRule.patchValue(sucess);
          this.intialvalue=this.vanityPatternRule.value;
          this.getValueByID(sucess.blockDefinitionId);
        });
      return false;
    }
  }



  getValueByID(id) {
    this.allService.getVanityPatternRuleDetailData(id).subscribe((sucess: any) => {
      this.intialvalue = sucess;
      this.vanityPatternRule.patchValue(sucess);
    }, error => {
      // alert("Error while updating the record");
    });
  }

  back(){
    this.router.navigate(['/number/vanityPatternTable']);
  }

  resetForm(){
    console.log(this.vanityPatternRule);
    this.vanityPatternRule.reset(this.intialvalue);
    if(this.actionBtn == 'Save') {
      this.vanityPatternRule.reset(this.intialvalue);
    }
    if(this.actionBtn == 'Update') {
      this.vanityPatternRule.patchValue(this.intialvalue);
    } 
  }
}
