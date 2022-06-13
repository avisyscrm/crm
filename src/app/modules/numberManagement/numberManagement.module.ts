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
import { NumberGenerationComponent } from './numberComponent/number-generation/number-generation.component';
import { NumberSchemeConfigurationComponent } from './numberComponent/number-scheme-configuration/number-scheme-configuration.component';
import { VanityPatternRulesComponent } from './numberComponent/vanity-pattern-rules/vanity-pattern-rules.component';
import { NumberTypeTableComponent } from './numberComponent/number-type-table/number-type-table.component';
import { NumberFormatAllComponent } from './numberComponent/number-format-all/number-format-all.component';
import { NumberSchemeLineDetailFormComponent } from './numberComponent/number-scheme-line-detail-form/number-scheme-line-detail-form.component';
import { NumberSchemeTableComponent } from './numberComponent/number-scheme-table/number-scheme-table.component';
import { BlockDefinitonTableComponent } from './numberComponent/block-definiton-table/block-definiton-table.component';
import { VanityPatternRulesTableComponent } from './numberComponent/vanity-pattern-rules-table/vanity-pattern-rules-table.component';
import { DateTimmeComponent } from './numberComponent/date-timme/date-timme.component';
import { NumberDirective } from 'src/app/shared/namber-valid-directive';


@NgModule({
  declarations: [
    NumberTypeFormComponent,
    NumberFormatFormComponent,
    NumberSchemeFormComponent,
    NumberSchemeLineDetailFormComponent,
    BlockDefinationFormComponent,
    VanityNumberComponent,
    GeneratedNumbersFormComponent,
    NumberSchemeConfigurationComponent,
    VanityPatternRulesComponent,
    NumberGenerationComponent,
    NumberTypeTableComponent,
    NumberFormatAllComponent,
    NumberSchemeTableComponent,
    BlockDefinitonTableComponent,
    VanityPatternRulesTableComponent,
    DateTimmeComponent,
    NumberDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    NumberManagementRoutingModule
  ]
})
export class NumberMangementModule { }
