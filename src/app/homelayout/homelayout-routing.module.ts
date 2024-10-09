import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PermisosindexComponent } from '../admin/permisos/permisosindex/permisosindex.component';
import { PermisoscreateComponent } from '../admin/permisos/permisoscreate/permisoscreate.component';
import { RoleindexComponent } from '../admin/roles/roleindex/roleindex.component';
import { RolecreateComponent } from '../admin/roles/rolecreate/rolecreate.component';

const routes: Routes = [{
  path:'',component:HomeComponent,
  children:[
    {path:'admin/permisos',title:"Permisos", component: PermisosindexComponent},
    {path:'admin/permisos/nuevo',component:PermisoscreateComponent},
    {path:'admin/role', title:"Roles",component: RoleindexComponent},
    {path:'admin/role/nuevo', component: RolecreateComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomelayoutRoutingModule { }
