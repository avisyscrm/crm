import { GeneratedNumbersFormComponent } from './numberComponent/generated-numbers-form/generated-numbers-form.component';
import { VanityNumberComponent } from './numberComponent/vanity-number/vanity-number.component';
import { BlockDefinationFormComponent } from './numberComponent/block-defination-form/block-defination-form.component';
import { NumberFormatFormComponent } from './numberComponent/number-format-form/number-format-form.component';
import { NumberSchemeFormComponent } from './numberComponent/number-scheme-form/number-scheme-form.component';
import { NumberTypeFormComponent } from './numberComponent/number-type-form/number-type-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCrmComponent } from '../layout-crm/layout-crm.component';
import { NumberSchemeConfigurationComponent } from './numberComponent/number-scheme-configuration/number-scheme-configuration.component';
import { VanityPatternRulesComponent } from './numberComponent/vanity-pattern-rules/vanity-pattern-rules.component';
import { NumberGenerationComponent } from './numberComponent/number-generation/number-generation.component';


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
    {
      path: 'number-scheme-configuration',
      component: NumberSchemeConfigurationComponent,
      data: { title: 'Number Scheme' }
    },
    {
      path: 'number-pattern-rules',
      component: VanityPatternRulesComponent,
      data: { title: 'Number Scheme' }
    },
    {
      path: 'number-generation',
      component: NumberGenerationComponent,
      data: { title: 'Number Scheme' }
    },
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberManagementRoutingModule { }
