import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {User} from "../../shared/models/user.model";
import {UserService} from "../../shared/services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 providers:[UserService]
})
export class LoginComponent implements OnInit {

  /**Создаем переменую login_form и определяем её тип FormGroup*/
  login_form: FormGroup;

   constructor(private userService:UserService) {
   }

  /**Инцилизируем форму, т.е.указать как она связанна с шаблоном, какие поля есть в ней*/
  ngOnInit() {
    /**Создаем форму*/
    this.login_form = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),/**добавляем асинхронный валидатор checkForEmail отдельно*/
      pass: new FormControl('', [Validators.required, Validators.minLength(5)],this.checkForPassword)
      /**передаем наш валидатор this.checkForLength, добавляем this,поскольку данный метод присущ классу  LoginFormComponent */

    });
  }



  /**Обработчик события при нажатии на кнопку submit.
   *  Инцилизируем в шаблоне с помощью события (ngSubmit)="onSubmit()", передаем нашу функцию обработчик*/
  onSubmit() {
    const formData = this.login_form.value;
     this.userService.getUserByEmail(formData.email).subscribe((user:User)=>{
//        if(user){
// if(user.password===formData.password){}
//        }
//        else{
//          alert('Такого пользователя не существует');
//        }
       console.log('i formdata'+' '+  formData.email);
       console.log(user);
       }
     )
    // console.log('Submited!', this.login_form);
    /**Post*/
    this.userService.postUserByEmail(formData).subscribe((response)=>{
//        if(user){
// if(user.password===formData.password){}
//        }
//        else{
//          alert('Такого пользователя не существует');
//        }
        console.log('I am post' + ' '+ response);
      }
    )


  }

  /**Создание собственного валидатора*/
  /**метод checkForLength, принимает в себя некоторый контрол,который является типом FormControl*/
  /**метод checkForLength, должен возвращать либо ничего либо объект
   //{'errorCode':true}
   //null undefined
   */
  // checkForLength(control: FormControl) {
  //   /**control.value.length -обращаемся к значению контрола, к текущей длине значению, которое находится в input*/
  //   if (control.value.length <=this.charsCount) {
  //     return {
  //       'lengthError': true
  //     };
  //   }
  //   return null;
  // }

  /**THE END Создание собственного валидатора*/


  /**Создаем асинхронный валидатор для проверки email*/
  /**Метод возвращает промисс*/
  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true /**ключ emailIsUsed является кодом ошибки*/
          });
        } else {
          resolve(null);/**ничего не возвращаем если ошибки нет*/
        }
      }, 3000);
    });
  }

  /**The end Создаем асинхронный валидатор для проверки email*/

  /**Создаем асинхронный валидатор для пароля*/
  /**Метод возвращает промисс*/
  checkForPassword(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === '123456') {
          resolve({
            'PasswordIsUse': true /**ключ PasswordIsUse является кодом ошибки*/
          });
        } else {
          resolve(null);/**ничего не возвращаем если ошибки нет*/
        }
      }, 2000);
    });
  }

  /**The end Создаем асинхронный валидатор для пароля*/
}
