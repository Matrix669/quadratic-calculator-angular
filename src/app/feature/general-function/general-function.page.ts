import { Component, signal } from '@angular/core';
import { MainSectionContent } from '../components/main-section-content/main-section-content';
import { CardFunctionData } from '../components/card-function-data/card-function-data';
import {
  calculateFromGeneral,
  coordinates,
  generalDelta,
  zeroPoints,
} from '@/app/utils/functionCalculations';
import { DataFunctionResults } from '../components/data-function-results/data-function-results';
import { FunctionResults } from '@/app/types/quadratic';

@Component({
  selector: 'app-general-function',
  imports: [MainSectionContent, CardFunctionData, DataFunctionResults],
  templateUrl: './general-function.page.html',
  styleUrls: ['./general-function.page.scss', '../../shared/ui/main-link/main-link.scss'],
})
export class GeneralFunction {
  result = signal<FunctionResults | null>(null);
  onCalculate(values: { first: number | null; second: number | null; third: number | null }): void {
    console.log(values);
    const generalResult = calculateFromGeneral(values.first!, values.second!, values.third!);
    const { delta, zeroPointsResult, coordinatesResult } = generalResult;
    this.result.set({ ...values, delta, zeroPointsResult, coordinatesResult });
    console.log('delta: ', delta);
  }
  onReset(): void {
    this.result.set(null);
  }
}
