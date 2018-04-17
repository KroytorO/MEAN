import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // constructor() { }
  charsCount=5;

  /**Создаем переменую form и определяем её тип*/
  form: FormGroup;
  /**Инцилизируем форму, т.е.указать как она связанна с шаблоном, какие поля есть в ней*/
  ngOnInit() {
    /**Создаем форму*/
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),/**добавляем асинхронный валидатор checkForEmail отдельно*/
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
        /**передаем наш валидатор this.checkForLength, добавляем this,поскольку данный метод присущ классу  RegistrationFormComponent */
      }),
      user_name: new FormControl('')
    });
  }

  /**Обработчик события при нажатии на кнопку submit.
   *  Инцилизируем в шаблоне с помощью события (ngSubmit)="onSubmit()", передаем нашу функцию обработчик*/
  onSubmit() {
    console.log('Submited!', this.form);
  }

  /**Создание собственного валидатора*/
  /**метод checkForLength, принимает в себя некоторый контрол,который является типом FormControl*/
  /**метод checkForLength, должен возвращать либо ничего либо объект
   //{'errorCode':true}
   //null undefined
   */
  checkForLength(control: FormControl) {
    /**control.value.length -обращаемся к значению контрола, к текущей длине значению, которое находится в input*/
    if (control.value.length <=this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  /**THE END Создание собственного валидатора*/


  /**Создаем асинхронный валидатор*/
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

  /**The end Создаем асинхронный валидатор*/

}
