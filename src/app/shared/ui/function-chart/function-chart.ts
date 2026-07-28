import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { Component, computed, input } from '@angular/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { chartData } from '@/app/utils/functionChartData';

echarts.use([LineChart, GridComponent, CanvasRenderer]);

@Component({
  selector: 'app-function-chart',
  imports: [NgxEchartsDirective],
  templateUrl: './function-chart.html',
  styleUrl: './function-chart.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class FunctionChart {
  a = input.required<number>();
  b = input.required<number>();
  c = input.required<number>();
  p = input.required<number>();
  chartOptions = computed(() => {
    const points = chartData(this.a(), this.b(), this.c(), this.p());
    return {
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
      series: [
        {
          type: 'line',
          data: points,
          smooth: true,
          showSymbol: false,
        },
      ],
    };
  });
}
