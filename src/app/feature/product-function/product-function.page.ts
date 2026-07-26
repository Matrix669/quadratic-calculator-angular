import { Component } from '@angular/core';
import { MainSectionContent } from "../components/main-section-content/main-section-content";
import { CardFunctionData } from "../components/card-function-data/card-function-data";

@Component({
  selector: 'app-product-function',
  imports: [MainSectionContent, CardFunctionData],
  templateUrl: './product-function.page.html',
  styleUrl: './product-function.page.scss',
})
export class ProductFunction {}
