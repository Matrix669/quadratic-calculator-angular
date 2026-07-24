import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  imports: [HeroSection],
})
export class HomePage {}
