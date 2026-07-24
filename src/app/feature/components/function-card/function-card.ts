import { Component, input } from '@angular/core';
import { MainLink } from '@/app/shared/ui/main-link/main-link';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideSigma } from '@ng-icons/lucide';

@Component({
  selector: 'app-function-card',
  imports: [MainLink, NgIcon],
  templateUrl: './function-card.html',
  styleUrl: './function-card.scss',
  viewProviders: [provideIcons({lucideSigma})]
})
export class FunctionCard {
  title = input.required<string>();
  description = input.required<string>();
  pattern = input.required<string>();
  path = input.required<string>();
  cssType = input<string>()
}
