import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/models/shared/shared.module';
import { AdminroleTableComponent } from '../adminrole-table/adminrole-table.component';
import { AssignRoleComponent } from '../assign-role/assign-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from '../../auth/login/intersepter.service';



@NgModule({
  declarations: [
    AdminroleTableComponent,
    AssignRoleComponent,
    CreateRoleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },]
})
export class AdminModule { } 
