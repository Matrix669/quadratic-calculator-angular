import { Component, signal } from '@angular/core';
import { MainSectionContent } from '../components/main-section-content/main-section-content';
import { CardFunctionData } from '../components/card-function-data/card-function-data';
import { FunctionResults } from '@/app/types/quadratic';
import { calculateFromGeneral, productToGeneral } from '@/app/utils/functionCalculations';
import { DataFunctionResults } from '../components/data-function-results/data-function-results';

@Component({
  selector: 'app-product-function',
  imports: [MainSectionContent, CardFunctionData, DataFunctionResults],
  templateUrl: './product-function.page.html',
  styleUrl: './product-function.page.scss',
})
export class ProductFunction {
  result = signal<FunctionResults | null>(null);
  onCalculate(values: { first: number | null; second: number | null; third: number | null }): void {
    console.log(values);
    const productResult = productToGeneral(values.first!, values.second!, values.third!);
    const { b, c } = productResult;
    const generalResult = calculateFromGeneral(values.first!, b, c);
    const { delta, coordinatesResult } = generalResult;
    this.result.set({
      ...values,
      delta,
      zeroPointsResult: { x1: values.second, x2: values.third },
      coordinatesResult,
      b,
      c,
    });
    console.log('delta: ', delta);
    console.log('zeros', { x1: values.second, x2: values.third });
  }
  onReset(): void {
    this.result.set(null);
  }
}
