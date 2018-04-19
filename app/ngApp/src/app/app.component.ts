import {Component, OnInit} from '@angular/core';
import {HttpService} from "./http.service";
import 'rxjs/add/operator/map';
//создадим интерфейс юзера
interface User{
  name:string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[HttpService]
})
export class AppComponent  implements OnInit{

  // @Input() user;
 // user является интерфейсом User,но массивом
  user:User [] =[];
  userjson:User [] =[];
  constructor(private httpservice: HttpService ){}

/**Библиотека rsjx оптимизирует наш код, она смотрит если нет никаких слушателей
 * на наш стрим, то она просто не будет работать. Для этого мы подписываемся
 * на стрим, который возращает метод getUsers*/
  ngOnInit(){
    //указываем, что ожидаем получить уже сам массив юзеров (user: User[])
    this.httpservice.getUsers().subscribe((userjson: User[])=>{
        this.userjson = userjson;
        // console.log(userjson[0].name); -- почему так ругается браузер
        // console.log(userjson.name); -- а так почему ругается ангуляр
      console.log(userjson);
      }
    );

  this.httpservice.getUserDB().subscribe((user: User[])=>{
     this.user = user;

    console.log(user);
         });
      }
}
