import { Component } from '@angular/core';
import { MainSectionContent } from '../components/main-section-content/main-section-content';
import { CardFunctionData } from '../components/card-function-data/card-function-data';

@Component({
  selector: 'app-general-function',
  imports: [MainSectionContent, CardFunctionData],
  templateUrl: './general-function.page.html',
  styleUrls: ['./general-function.page.scss', '../../shared/ui/main-link/main-link.scss'],
})
export class GeneralFunction {}
