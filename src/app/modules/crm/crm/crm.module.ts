import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmRoutingModule } from './crm-routing.module';


// import { FromSectionComponent } from '../../client/from-section/from-section.component';
// import { FromTabSectionComponent } from '../../client/from-tab-section/from-tab-section.component';
// import { CreateUserComponent } from '../../client/hrms/create-user/create-user.component';
// import { EntitygroupFormComponent } from '../../client/hrms/entitygroup-form/entitygroup-form.component';
// import { ProductAttributeComponent } from '../../client/hrms/product-attribute/product-attribute.component';
// import { ProductFamilyFormComponent } from '../../client/hrms/product-family-form/product-family-form.component';
// import { ProductTabComponent } from '../../client/hrms/product-tab/product-tab.component';
import { ProductTableComponent } from '../../client/hrms/product-table/product-table.component';
import { ProducttemplateFormComponent } from '../../client/hrms/producttemplate-form/producttemplate-form.component';
import { SectionFromTemplateComponent } from '../../client/section-from-template/section-from-template.component';
import { TabfromTemplateComponent } from '../../client/tabfrom-template/tabfrom-template.component';
import { LayoutCrmComponent } from '../layout-crm/layout-crm.component';
import { ProductFamilyComponent } from '../crmCompont/product-family/product-family.component';
import { ProductlineFormComponent } from '../crmCompont/productline-form/productline-form.component';
import { ProductlineTableComponent } from '../crmCompont/productline-table/productline-table.component';
import { EntityFormComponent } from '../crmCompont/entity-form/entity-form.component';
import { EntityGroupsComponent } from '../crmCompont/entity-groups/entity-groups.component';
import { ProductTemplateFormComponent } from '../crmCompont/product-template-form/product-template-form.component';
import { ProductTemplatesComponent } from '../crmCompont/product-templates/product-templates.component';
import { ProductAttributesComponent } from '../crmCompont/product-attributes/product-attributes.component';
import { ProductAttributesFormComponent } from '../crmCompont/product-attributes-form/product-attributes-form.component';
import { ProductTabsComponent } from '../crmCompont/product-tabs/product-tabs.component';
import { ProductTabsFormComponent } from '../crmCompont/product-tabs-form/product-tabs-form.component';
import { ProductFamilyFormComponent } from '../crmCompont/product-family-form/product-family-form.component';
import { SharedModule } from 'src/app/shared/models/shared/shared.module';
// import { CreateUserComponent } from '../../client/hrms/create-user/create-user.component';
import { DynamicformViewComponent } from '../crmCompont/dynamicform-view/dynamicform-view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from '../../auth/login/intersepter.service';
import { CreateUserComponent } from '../crmCompont/create-user/create-user.component';
import { ShowUserComponent } from '../crmCompont/show-user/show-user.component';
import { ChangepasswordComponent } from '../crmCompont/changepassword/changepassword.component';
import { DynamicformDatatableComponent } from '../crmCompont/dynamicform-datatable/dynamicform-datatable.component';
import { EmailtemplateComponent } from '../crmCompont/emailtemplate/emailtemplate.component';
import { ScheduleemailFormComponent } from '../crmCompont/scheduleemail-form/scheduleemail-form.component';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


// import { ProductFamilyComponent } from './modules/crm/crmCompont/product-family/product-family.component';


@NgModule({
  declarations: [
    LayoutCrmComponent,
    ProductFamilyComponent,
    ProductFamilyFormComponent,
    ProductlineFormComponent,
    ProductlineTableComponent,
    EntityGroupsComponent,
    EntityFormComponent,
    ProductTemplatesComponent,
    ProductTemplateFormComponent,
    ProductTabsComponent,
    ProductTabsFormComponent,
    ProductAttributesComponent,
    ProductAttributesFormComponent,
    ProducttemplateFormComponent,
    DynamicformViewComponent,
    SectionFromTemplateComponent,
    TabfromTemplateComponent,
    CreateUserComponent,
    ProductTableComponent,
    ShowUserComponent,
    ChangepasswordComponent,
    DynamicformDatatableComponent,
    EmailtemplateComponent,
    ScheduleemailFormComponent,
 
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    SharedModule,
    // CKEditorModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },]
})
export class CrmModule { }
