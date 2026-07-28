import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { Component, computed, input } from '@angular/core';
import { LineChart, ScatterChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, DataZoomComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { chartData } from '@/app/utils/functionChartData';

echarts.use([
  LineChart,
  ScatterChart,
  GridComponent,
  TooltipComponent,
  CanvasRenderer,
  DataZoomComponent,
]);
// lucideChartSpline
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
  q = input.required<number>();
  zeroPoints = input.required<{
    x1: number | null;
    x2: number | null;
  }>();
  chartOptions = computed(() => {
    const points = chartData(this.a(), this.b(), this.c(), this.p());
    const markers = [
      {
        value: [this.p(), this.q()],
        name: 'Wierzchołek',
        itemStyle: { color: '#5b5fef', borderColor: '#fff', borderWidth: 4, opacity: 1 },
      },
    ];

    const { x1, x2 } = this.zeroPoints();
    if (x1 !== null)
      markers.push({
        value: [x1, 0],
        name: 'x₁',
        itemStyle: { color: '#ff6b6b', borderColor: '#fff', borderWidth: 4, opacity: 1 },
      });
    if (x2 !== null)
      markers.push({
        value: [x2, 0],
        name: 'x₂',
        itemStyle: { color: '#ff6b6b', borderColor: '#fff', borderWidth: 4, opacity: 1 },
      });
    return {
      xAxis: { type: 'value' },
      yAxis: { type: 'value' },
      series: [
        {
          type: 'line',
          data: points,
          smooth: true,
          showSymbol: false,
          lineStyle: {
            color: '#5b5fef',
            width: 3,
          },
        },
        {
          type: 'scatter',
          data: markers,
          symbolSize: 26,
          emphasis: {
            scale: 1.2,
          },
        },
      ],
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const [x, y] = params.value;
          
          if (params.name === 'Wierzchołek') {
            return `W = (${x.toFixed(3)}, ${y.toFixed(3)})`;
          }
          // miejsca zerowe — y i tak ~ 0, pokazujesz samo x
          return `${params.name} = ${x.toFixed(3)}`;
        },
      },
      dataZoom: [
        { type: 'inside', xAxisIndex: 0, filterMode: 'none' },
        // opcjonalnie:
        // { type: 'slider', xAxisIndex: 0, height: 18 },
      ],
    };
  });
}
