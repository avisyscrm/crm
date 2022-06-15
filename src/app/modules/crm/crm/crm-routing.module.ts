import { CommonAllComponent } from './../crmCompont/common-all/common-all.component';
import { ProfilepageComponent } from './../crmCompont/profilepage/profilepage.component';
import { ScheduleemailFormComponent } from './../crmCompont/scheduleemail-form/scheduleemail-form.component';
import { EmailtemplateformComponent } from './../crmCompont/emailtemplateform/emailtemplateform.component';
import { EmailtemplateComponent } from './../crmCompont/emailtemplate/emailtemplate.component';
import { DynamicformDatatableComponent } from './../crmCompont/dynamicform-datatable/dynamicform-datatable.component';
import { EntityFormComponent } from './../crmCompont/entity-form/entity-form.component';
import { EntityGroupsComponent } from './../crmCompont/entity-groups/entity-groups.component';
import { ProductlineFormComponent } from './../crmCompont/productline-form/productline-form.component';
import { ProductlineTableComponent } from './../crmCompont/productline-table/productline-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrEventsComponent } from '../../client/hrms/hr-events/hr-events.component';
import { HrHolidaysComponent } from '../../client/hrms/hr-holidays/hr-holidays.component';
import { HrPayrollComponent } from '../../client/hrms/hr-payroll/hr-payroll.component';
import { ProductAttributeComponent } from '../../client/hrms/product-attribute/product-attribute.component';
import { ProductTabComponent } from '../../client/hrms/product-tab/product-tab.component';
import { ProductFamilyFormComponent } from '../crmCompont/product-family-form/product-family-form.component';
import { ProductFamilyComponent } from '../crmCompont/product-family/product-family.component';
import { LayoutCrmComponent } from '../../layout-crm/layout-crm.component';
import { ProductTemplatesComponent } from '../crmCompont/product-templates/product-templates.component';
import { ProductTemplateFormComponent } from '../crmCompont/product-template-form/product-template-form.component';
import { ProductTabsFormComponent } from '../crmCompont/product-tabs-form/product-tabs-form.component';
import { ProductTabsComponent } from '../crmCompont/product-tabs/product-tabs.component';
import { ProductAttributesComponent } from '../crmCompont/product-attributes/product-attributes.component';
import { ProductAttributesFormComponent } from '../crmCompont/product-attributes-form/product-attributes-form.component';
import { DynamicformViewComponent } from '../crmCompont/dynamicform-view/dynamicform-view.component';
import { CreateUserComponent } from '../crmCompont/create-user/create-user.component';
import { ShowUserComponent } from '../crmCompont/show-user/show-user.component';
import { ChangepasswordComponent } from '../crmCompont/changepassword/changepassword.component';
import { ProductAtributeMasterComponent } from '../crmCompont/product-atribute-master/product-atribute-master.component';
import { ProductAtributeMasterSummmaryComponent } from '../crmCompont/product-atribute-master-summmary/product-atribute-master-summmary.component';
import { EmailComponent } from '../crmCompont/email/email.component';
import { ProductHierachyComponent } from '../crmCompont/product-hierachy/product-hierachy.component';
import { ProductHierachyFormComponent } from '../crmCompont/product-hierachy-form/product-hierachy-form.component';
import { ProductEntityTypeComponent } from '../crmCompont/product-entity-type/product-entity-type.component';
import { ProductEntityTypeFromComponent } from '../crmCompont/product-entity-type-from/product-entity-type-from.component';
import { CommonFormComponent } from '../crmCompont/common-form/common-form.component';




const routes: Routes = [
          
                        {
                          path:"crm",component:LayoutCrmComponent,
                        children:[ 
                          {
                            path: 'product-family',
                            component: ProductFamilyComponent,
                            data: { title: 'Product-Family' }
                          }, 
                          {
                          path: 'product-family-form',
                          component: ProductFamilyFormComponent,
                          data: { title: 'Product-Family' }
                        },
                        {
                          path: 'product-line',
                          component: ProductlineTableComponent,
                          data: { title: 'Product Line' }
                        },
                        {
                          path: 'productline-form',
                          component: ProductlineFormComponent,
                          data: { title: 'Product Line' }
                        },
                        {
                          path: 'entity-groups',
                          component: EntityGroupsComponent,
                          data: { title: 'Entity Group' }
                        },{
                          path: 'product-hierachy',
                          component: ProductHierachyComponent,
                          data: { title: 'Product Hierachy' }
                        },
                        {
                          path: 'product-entity-type',
                          component: ProductEntityTypeComponent,
                          data: { title: 'Product Entity Type' }
                        }, {
                          path: 'product-entity-type-from',
                          component: ProductEntityTypeFromComponent,
                          data: { title: 'Product Entity Type From' }
                        },
                        
                    
                        {
                          path: 'product-hierachy-form',
                          component: ProductHierachyFormComponent,
                          data: { title: 'Product Hierachy Form' }
                        },
                      
                        {
                          path: 'entity-form',
                          component: EntityFormComponent,
                          data: { title: 'Entity Group' }
                        },
                        {
                          path: 'product-templates', 
                          component: ProductTemplatesComponent,
                          data: { title: 'Product Template' }
                        },
                        {
                          path: 'product-template-form', 
                          component: ProductTemplateFormComponent,
                          data: { title: 'Product Template' }
                        },
                        {
                          path: 'product-tabs', 
                          component: ProductTabsComponent,
                          data: { title: 'Product Tab' }
                        },
                        {
                          path: 'product-tabs-form', 
                          component: ProductTabsFormComponent,
                          data: { title: 'Product Tab' }
                        },
                        {
                          path: 'product-attribute',
                          component: ProductAttributesComponent,
                          data: { title: 'Product Attribute' }
                        },
                        {
                          path: 'product-attribute-form',
                          component: ProductAttributesFormComponent,
                          data: { title: 'Product Attribute' }
                        },
                        {
                          path: 'hr-holidays',
                          component: HrHolidaysComponent,
                          data: { title: ':: Epic :: HR Holidays' }
                        },
                        {
                          path: 'hr-events',
                          component: HrEventsComponent,
                          data: { title: 'Product Attribute' }
                        },
                        {
                          path: 'product-attribute-form',
                          component: ProductAttributeComponent,
                          data: { title: 'Product Attribute' }
                        },
                        {
                          path: 'hr-payroll',
                          component: HrPayrollComponent,
                          data: { title: 'Product Tab' }
                        },
                      
                        {
                          path: 'product-tab',
                          component: ProductTabComponent,
                          data: { title: 'Product Tab' }
                        },{
                          path:"Product-Atribute-Master",
                          component: ProductAtributeMasterComponent
                        },{
                          path:"Product-Atribute-Summmary",
                           component:ProductAtributeMasterSummmaryComponent,
                        },
                        {
                         path:'dynamicDataTable',
                         component:DynamicformDatatableComponent
                        },
                        {
                         path:'dynamicForm',
                         component:DynamicformViewComponent
                        },
                      
                        {
                          path: 'product-tab',
                          component: ProductTabComponent,
                          data: { title: ':: Epic :: HR Payroll' }
                        },
                        {
                          path: 'create-user',
                          component: CreateUserComponent,
                          data: { title: 'Create-User-Component' }
                        }, 
                        {
                          path: 'user-all',
                          component: ShowUserComponent,
                          data: { title: 'Show-User' }
                        }, 
                        {
                          path: 'change-password',
                          component: ChangepasswordComponent,
                          data: { title: 'Show-User' }
                        },
                        {
                          path: 'emailTemplate',
                          component: EmailtemplateComponent,
                          data: { title: 'Email Template' }
                        },
                        {
                          path: 'emailTemplateForm',
                          component: EmailtemplateformComponent,
                          data: { title: 'Email Template' }
                        },
                        {
                          path: 'emails',
                          component: EmailComponent,
                          data: { title: 'Emails' }
                        },
                        {
                          path: 'scheduleEmail',
                          component: ScheduleemailFormComponent,
                          data: { title: 'Schedule Email ' }
                        },
                        {
                          path: 'profile',
                          component: ProfilepageComponent,
                          data: { title: 'Profile' }
                        },
                        {
                          path: 'commonAll',
                          component: CommonAllComponent,
                          data: { title: 'Common Master' }
                        },
                        {
                          path: 'commonForm',
                          component: CommonFormComponent,
                          data: { title: 'Common Master' }
                        },
                      ]     
                      },
                      // {path:"",redirectTo:"/crm",pathMatch:'full'},
                      //  { path: '**', redirectTo: '/crm' },
                    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { 
  static components = [
  ];
}
