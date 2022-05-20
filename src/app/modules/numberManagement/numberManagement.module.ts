import { SharedModule } from './../../shared/models/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberManagementRoutingModule } from './numberManagement-routing.module';
import { NumberTypeFormComponent } from './numberComponent/number-type-form/number-type-form.component';
import { NumberFormatFormComponent } from './numberComponent/number-format-form/number-format-form.component';
import { NumberSchemeFormComponent } from './numberComponent/number-scheme-form/number-scheme-form.component';



@NgModule({
  declarations: [
    NumberTypeFormComponent,
    NumberFormatFormComponent,
    NumberSchemeFormComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    NumberManagementRoutingModule
  ]
})
export class NumberMangementModule { }
