import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FunctionChart } from "@/app/shared/ui/function-chart/function-chart";

@Component({
  selector: 'app-data-function-results',
  imports: [DecimalPipe, FunctionChart],
  templateUrl: './data-function-results.html',
  styleUrls: ['./data-function-results.scss', '../../../shared/ui/main-link/main-link.scss'],
})
export class DataFunctionResults {
  reset = output<void>();
  
  a = input.required<number | null>()
  b = input.required<number | null>()
  c = input.required<number | null>()
  
  delta = input.required<number>();
  zeroPoints = input.required<{ x1: number | null; x2: number | null }>();
  coordinates = input.required<{ p: number; q: number }>();
}
