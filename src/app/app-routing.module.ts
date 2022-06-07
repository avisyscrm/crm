import { FeatureComponent } from './modules/crm/crmCompont/feature/feature.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PreloadModulesStrategy } from './core/strategies/preload-module.strategy';
import { AuthModule } from './modules/auth/auth.module';
import { CrmModule } from './modules/crm/crm/crm.module';
import { ForgotPassFormComponent } from './modules/auth/forgot-pass-form/forgot-pass-form.component';
import { AdminRoutingModule } from './modules/admin/admin/admin-routing.module';
import { NumberMangementModule } from './modules/numberManagement/numberManagement.module';
const routes: Routes = [ 
  { path :'master', component: FeatureComponent},
  { path: 'forgot-pass-forms', component: ForgotPassFormComponent},
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'crm',  loadChildren:'./modules/crm/crm/crm.module#CrmModule' },
  { path: 'number',  loadChildren:'./modules/numberManagement/numberManagement.module#NumberMangementModule'},
  { path: '**', redirectTo: '/login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadModulesStrategy, useHash: true, relativeLinkResolution: 'legacy' }), 
    AuthModule,CrmModule, AdminRoutingModule, NumberMangementModule ],
  exports: [RouterModule],
  providers:[PreloadModulesStrategy]
})
export class AppRoutingModule { }
