import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { FunctionFormsSection } from "./components/function-forms-section/function-forms-section";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  imports: [HeroSection, FunctionFormsSection],
})
export class HomePage {}
