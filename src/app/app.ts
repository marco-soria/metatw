import { Component } from '@angular/core';
import { Featured } from './components/featured/featured';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { TopBar } from './components/top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [TopBar, Header, Footer, Featured],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'metatw';
}
