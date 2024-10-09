import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TotpComponent } from './auth/totp/totp.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'totp',component:TotpComponent},
  {path:'', loadChildren:()=>import('./homelayout/homelayout.module').then(m=>m.HomelayoutModule)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
