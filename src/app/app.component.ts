import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    setTimeout(() => this.message = 'Hello world!!!', 6000)
  }
  message = 'Hello world';
}
