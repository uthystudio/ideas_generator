import { Component } from '@angular/core';
import {themes} from "./word1";
import {meanings} from "./word2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idea = 'Sorry, no ideas!';

  generate() {
    this.idea = themes[Math.floor(Math.random()*themes.length)] + meanings[Math.floor(Math.random()*meanings.length)];
  }
}
