import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/models/shared/shared.module';
import { AdminroleTableComponent } from '../adminrole-table/adminrole-table.component';
import { AssignRoleComponent } from '../assign-role/assign-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';



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
  ]
})
export class AdminModule { } 
