import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logedin: boolean;

  constructor() {
    this.logedin = !!this.readLocalStorageValue('token');
    // console.log(this.logedin);
  }

  readLocalStorageValue(key: string): string {
    // console.log(localStorage.getItem(key));
    // @ts-ignore
    return localStorage.getItem(key);
  }

  ngOnInit(): void {
  }


}
