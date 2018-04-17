//Библиотеки
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
//Компоненты модули
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
declarations:[
  LoginComponent,
  RegistrationComponent,
  AuthComponent
],
  imports:[
    CommonModule, //модуль, который несет базовый функционал по типу ангуляр
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})

export class AuthModule{}
