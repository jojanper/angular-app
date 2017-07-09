import { Component } from '@angular/core';

import { ApiService } from './services';

import '../style/app.scss';

@Component({
  selector: 'dng-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/jojanper/angular-app';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;
  }
}
