import { Component, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb } from '@ng-icons/lucide';

@Component({
  selector: 'app-card-function-data',
  imports: [NgIcon],
  templateUrl: './card-function-data.html',
  styleUrls: ['./card-function-data.scss', '../../../shared/ui/main-link/main-link.scss'],
  viewProviders: [provideIcons({lucideLightbulb})]
})
export class CardFunctionData {
  typeForm = input.required<string>();
  pattern = input.required<string>();

  firstLabel = input.required<string>();
  firstPlaceholder = input.required<string>();
  secondLabel = input.required<string>();
  secondPlaceholder = input.required<string>();
  thirdLabel = input.required<string>();
  thirdPlaceholder = input.required<string>();

  hint = input.required<string>()
}
