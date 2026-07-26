import { Component, signal } from '@angular/core';
import { MainSectionContent } from '../components/main-section-content/main-section-content';
import { CardFunctionData } from '../components/card-function-data/card-function-data';
import { coordinates, generalDelta, zeroPoints } from '@/app/utils/functionCalculations';
import { DataFunction } from '../components/data-function/data-function';

@Component({
  selector: 'app-general-function',
  imports: [MainSectionContent, CardFunctionData, DataFunction],
  templateUrl: './general-function.page.html',
  styleUrls: ['./general-function.page.scss', '../../shared/ui/main-link/main-link.scss'],
})
export class GeneralFunction {
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
    const delta = generalDelta(values.first!, values.second!, values.third!);
    const zeroPointsResult = zeroPoints(delta, values.first!, values.second!);
    const coordinatesResult = coordinates(delta, values.first!, values.second!);
    this.result.set({ ...values, delta, zeroPointsResult, coordinatesResult });
    console.log('delta: ', delta);
  }
  onReset(): void {
    this.result.set(null);
  }
}
