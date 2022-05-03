import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCrmComponent } from '../../crm/layout-crm/layout-crm.component';
import { AdminroleTableComponent } from '../adminrole-table/adminrole-table.component';
import { AssignRoleComponent } from '../assign-role/assign-role.component';
import { CreateRoleComponent } from '../create-role/create-role.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';


const routes: Routes = [

  {
    path:"crm",component:LayoutCrmComponent,
   
  children:[ 
  
    {
      path: 'adminRole-table',
      component: AdminroleTableComponent,
      data: { title: ':: Epic :: Admin Login' }
    },
    {
      path: 'create-role',
      component: CreateRoleComponent,
      data: { title: ':: Epic :: Admin Login' }
    },
    {
      path: 'assign-role',
      component: AssignRoleComponent,
      data: { title: ':: Epic :: Admin Login' }
    },
   
  ]
  
  },

   {path:"admin",component:LoginAdminComponent,},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
