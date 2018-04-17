/**
 * Created by Admin on 12.04.2018.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.router.navigate(['/login']);
  }

}
