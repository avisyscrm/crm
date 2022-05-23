import { GeneratedNumbersFormComponent } from './numberComponent/generated-numbers-form/generated-numbers-form.component';
import { VanityNumberComponent } from './numberComponent/vanity-number/vanity-number.component';
import { BlockDefinationFormComponent } from './numberComponent/block-defination-form/block-defination-form.component';
import { NumberFormatFormComponent } from './numberComponent/number-format-form/number-format-form.component';
import { NumberSchemeFormComponent } from './numberComponent/number-scheme-form/number-scheme-form.component';
import { NumberTypeFormComponent } from './numberComponent/number-type-form/number-type-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCrmComponent } from '../layout-crm/layout-crm.component';


const routes: Routes = [
  {
    path:"number",component:LayoutCrmComponent,
  children:[ 
    {
      path: 'numberType',
      component: NumberTypeFormComponent,
      data: { title: 'Number Type' }
    }, {
      path: 'numberFormat',
      component: NumberFormatFormComponent,
      data: { title: 'Number Format' }
    }, {
      path: 'numberScheme',
      component: NumberSchemeFormComponent,
      data: { title: 'Number Scheme' }
    }, {
      path: 'blockDefination',
      component: BlockDefinationFormComponent,
      data: { title: 'Number Scheme' }
    },{
      path: 'vanityNumber',
      component: VanityNumberComponent,
      data: { title: 'Vanity Number' }
    },{
      path: 'generatedNumber',
      component: GeneratedNumbersFormComponent,
      data: { title: 'Generated Number' }
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberManagementRoutingModule { }
