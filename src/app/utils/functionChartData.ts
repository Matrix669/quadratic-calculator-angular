export function chartData(a: number, b: number, c: number, p: number) {
  const points: [number, number][] = [];
  const range = 5;
  const step = 0.1;

  const start = p - range;
  const end = p + range;

  for (let x = start; x <= end; x += step) {
    const y = a * x * x + b * x + c;
    points.push([x, y]);
  }
  return points;
}
