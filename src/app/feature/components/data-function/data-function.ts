import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-data-function',
  imports: [DecimalPipe],
  templateUrl: './data-function.html',
  styleUrls: ['./data-function.scss', '../../../shared/ui/main-link/main-link.scss'],
})
export class DataFunction {
  reset = output<void>();
  
  a = input.required<number | null>()
  delta = input.required<number>();
  zeroPoints = input.required<{ x1: number | null; x2: number | null }>();
  coordinates = input.required<{ p: number; q: number }>();
}
