import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { TopBar } from './components/top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [TopBar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'metatw';
}
