/**
 * Created by Admin on 12.04.2018.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthComponent} from "./auth.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";




// let defaultRoot = 'app';

const routes: Routes = [
  {path:'',component:AuthComponent,children:[
    {path:'login', component:LoginComponent },
    {path:'registration', component:RegistrationComponent }
  ]}//внутрение роуты для модуля  auth.module, через children

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
