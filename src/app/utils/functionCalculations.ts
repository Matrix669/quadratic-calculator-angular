export function generalDelta(a: number, b: number, c: number) {
  const result: number = b ** 2 - 4 * a * c;
  return result;
}
export function zeroPoints(delta: number, a: number, b: number) {
  if (delta > 0) {
    const x1: number | null = (-b - Math.sqrt(delta)) / (2 * a);
    const x2: number | null = (-b + Math.sqrt(delta)) / (2 * a);
    return { x1, x2 };
  } else if (delta === 0) {
    const x1: number | null = -b / (2 * a);
    return { x1, x2: null };
  } else {
    return { x1: null, x2: null };
  }
}

export function coordinates(delta: number, a: number, b: number) {
  const p: number = -b / (2 * a);
  const q: number = -delta / (4 * a);
  return { p, q };
}
