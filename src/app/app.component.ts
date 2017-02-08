import { Component } from '@angular/core';
// import { Http } from '@angular/http';

import { ApiService } from './services';

import '../style/app.scss';

@Component({
  selector: 'dng2-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/jojanper/ng2-app';
  title: string;

  // playlist = 'http://www.bbc.co.uk/radio1/playlist.json';

  constructor(private api: ApiService /*, private http: Http*/) {
    // Do something with api
    this.title = this.api.title;

    /*
    this.http.get(this.playlist).subscribe((item) => {
        console.log(item);
    });
    */
  }
}
