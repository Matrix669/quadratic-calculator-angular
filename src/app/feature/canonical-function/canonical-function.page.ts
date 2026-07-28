import { Component, signal } from '@angular/core';
import { CardFunctionData } from '../components/card-function-data/card-function-data';
import { MainSectionContent } from '@/app/feature/components/main-section-content/main-section-content';
import { DataFunctionResults } from '../components/data-function-results/data-function-results';
import { FunctionResults } from '@/app/types/quadratic';
import { calculateFromGeneral, canonicalToGeneral } from '@/app/utils/functionCalculations';

@Component({
  selector: 'app-canonical-function',
  imports: [MainSectionContent, CardFunctionData, DataFunctionResults],
  templateUrl: './canonical-function.page.html',
  styleUrl: './canonical-function.page.scss',
})
export class CanonicalFunction {
  result = signal<FunctionResults | null>(null);
  onCalculate(values: { first: number | null; second: number | null; third: number | null }): void {
    console.log(values);
    const canonicalResult = canonicalToGeneral(values.first!, values.second!, values.third!);
    const { b, c } = canonicalResult;
    const generalResult = calculateFromGeneral(values.first!, b, c);
    const { delta, zeroPointsResult, coordinatesResult } = generalResult;
    this.result.set({ ...values, delta, zeroPointsResult, coordinatesResult, b, c });
    console.log('delta: ', delta);
  }
  onReset(): void {
    this.result.set(null);
  }
}
