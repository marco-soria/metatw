import { Component } from '@angular/core';
import { Banner } from './components/banner/banner';
import { Featured } from './components/featured/featured';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Products } from './components/products/products';
import { TopBar } from './components/top-bar/top-bar';

@Component({
  selector: 'app-root',
  imports: [TopBar, Header, Footer, Featured, Products, Banner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'metatw';
}
