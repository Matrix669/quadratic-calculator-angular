import { Component, signal } from '@angular/core';
import { CardFunctionData } from '../components/card-function-data/card-function-data';
import { MainSectionContent } from '@/app/feature/components/main-section-content/main-section-content';
import { DataFunctionResults } from '../components/data-function-results/data-function-results';

@Component({
  selector: 'app-canonical-function',
  imports: [MainSectionContent, CardFunctionData, DataFunctionResults],
  templateUrl: './canonical-function.page.html',
  styleUrl: './canonical-function.page.scss',
})
export class CanonicalFunction {
  result = signal<{
    first: number | null;
    second: number | null;
    third: number | null;
    delta: number;
    zeroPointsResult: {
      x1: number | null;
      x2: number | null;
    };
    coordinatesResult: {
      p: number;
      q: number;
    };
  } | null>(null);
  onCalculate(values: { first: number | null; second: number | null; third: number | null }): void {
    console.log(values);

    // this.result.set({ ...values, delta, zeroPointsResult, coordinatesResult });
    // console.log('delta: ', delta);
  }
  onReset(): void {
    this.result.set(null);
  }
}
