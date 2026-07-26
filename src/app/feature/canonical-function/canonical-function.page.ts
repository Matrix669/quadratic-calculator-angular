import { Component } from '@angular/core';
import { CardFunctionData } from "../components/card-function-data/card-function-data";
import { MainSectionContent } from '@/app/feature/components/main-section-content/main-section-content';

@Component({
  selector: 'app-canonical-function',
  imports: [MainSectionContent, CardFunctionData],
  templateUrl: './canonical-function.page.html',
  styleUrl: './canonical-function.page.scss',
})
export class CanonicalFunction {}
