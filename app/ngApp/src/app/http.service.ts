import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";
import 'rxjs/add/operator/map';


@Injectable()
export class HttpService{

  private serverApi = environment.apiUrl;

  constructor (private http: HttpClient){}

  /**Любой методы http возращают Observable<any>  объект  или стрим. Зная это, необходимо добавить к методу возврат, т.е. return.
   * Тогда метод вернет getUsers вернет Observable<any>  объект*/
//делаем запром на сервер
//   getUsers(){
//     //функция get принимает url,по которому мы долджны забрать наши данные
//     return this.http.get(`${this.serverApi}/api/json/getUsers`);
//   }

  getUserDB(){
    //функция get принимает url,по которому мы долджны забрать наши данные
    return this.http.get(`${this.serverApi}/user`)
       .map(response => response.user)
      // .map(user => {
      //   /** ПЕРЕДАЕМ колбэк, который будет обробатвать каждый из элементов данного массива*/
      //   return user.map(u => {
      //     return {
      //       name: u.name,
      //       age: u.age
      //     }
      //   })
      // })

     }
}
