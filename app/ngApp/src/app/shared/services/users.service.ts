/**
 * Created by Admin on 13.04.2018.
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../models/user.model";
import {Observable} from "rxjs/Observable";


@Injectable()
  export class UserService{
  private serverApi = environment.apiUrl;
    constructor(private http: HttpClient){}
//Метод возвращает Observable<User>, по типу User
    getUserByEmail(email:string):Observable<User>{
      return this.http.get<User>(`${this.serverApi}/api/json/getUserByEmail?email=${email}`)
    }
  }
