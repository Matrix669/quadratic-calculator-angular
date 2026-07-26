import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { FunctionFormsSection } from './components/function-forms-section/function-forms-section';
import { BgFunctionSection } from './components/bg-function-section/bg-function-section';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  imports: [HeroSection, FunctionFormsSection, BgFunctionSection],
})
export class HomePage {}
