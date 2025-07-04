import { Component } from '@angular/core';
import { TopBar } from './components/top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [TopBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'metatw';
}
