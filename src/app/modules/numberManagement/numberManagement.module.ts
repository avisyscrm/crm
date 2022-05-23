import { SharedModule } from './../../shared/models/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberManagementRoutingModule } from './numberManagement-routing.module';
import { NumberTypeFormComponent } from './numberComponent/number-type-form/number-type-form.component';
import { NumberFormatFormComponent } from './numberComponent/number-format-form/number-format-form.component';
import { NumberSchemeFormComponent } from './numberComponent/number-scheme-form/number-scheme-form.component';
import { BlockDefinationFormComponent } from './numberComponent/block-defination-form/block-defination-form.component';
import { VanityNumberComponent } from './numberComponent/vanity-number/vanity-number.component';
import { GeneratedNumbersFormComponent } from './numberComponent/generated-numbers-form/generated-numbers-form.component';



@NgModule({
  declarations: [
    NumberTypeFormComponent,
    NumberFormatFormComponent,
    NumberSchemeFormComponent,
    BlockDefinationFormComponent,
    VanityNumberComponent,
    GeneratedNumbersFormComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    NumberManagementRoutingModule
  ]
})
export class NumberMangementModule { }
