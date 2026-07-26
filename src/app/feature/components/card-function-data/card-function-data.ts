import { Component, input, output, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCalculator, lucideLightbulb } from '@ng-icons/lucide';

@Component({
  selector: 'app-card-function-data',
  imports: [NgIcon],
  templateUrl: './card-function-data.html',
  styleUrls: ['./card-function-data.scss', '../../../shared/ui/main-link/main-link.scss'],
  viewProviders: [provideIcons({ lucideLightbulb, lucideCalculator })],
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

  hint = input.required<string>();

  firstValue = signal<number | null>(null);
  secondValue = signal<number | null>(null);
  thirdValue = signal<number | null>(null);

  firstError = signal<string | null>(null);
  secondError = signal<string | null>(null);
  thirdError = signal<string | null>(null);
  onFirstInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.firstValue.set(value === '' ? null : Number(value));

    if (this.firstValue() !== null && this.firstValue() !== 0) {
      this.firstError.set(null);
    }
  }
  onSecondInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.secondValue.set(value === '' ? null : Number(value));

    if (this.secondValue() !== null) {
      this.secondError.set(null);
    }
  }
  onThirdInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.thirdValue.set(value === '' ? null : Number(value));

    if (this.thirdValue() !== null) {
      this.thirdError.set(null);
    }
  }

  onCalculate(): void {
    this.firstError.set(null);
    this.secondError.set(null);
    this.thirdError.set(null);

    if (this.firstValue() === null) {
      this.firstError.set('To pole jest wymagane');
    } else if (this.firstValue() === 0) {
      this.firstError.set("'a' nie moze być równe 0!");
    }
    if (this.secondValue() === null) {
      this.secondError.set('To pole jest wymagane');
    }
    if (this.thirdValue() === null) {
      this.thirdError.set('To pole jest wymagane');
    }
    if (this.firstError() || this.secondError() || this.thirdError()) {
      return;
    }
    this.calculate.emit({
      first: this.firstValue(),
      second: this.secondValue(),
      third: this.thirdValue(),
    });
  }
  calculate = output<{ first: number | null; second: number | null; third: number | null }>();
}
