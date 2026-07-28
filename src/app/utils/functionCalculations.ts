//general
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

export function canonicalToGeneral(a: number, p: number, q: number) {
  const b: number = -2 * a * p;
  const c: number = a * p ** 2 + q;
  return { b, c };
}
export function productToGeneral(a: number, x1: number, x2?: number | null) {
  const b: number = -a * (x1 + (x2 ?? x1));
  const c: number = a * x1 * (x2 ?? x1);
  return { b, c };
}

export function calculateFromGeneral(a: number, b: number, c: number) {
  const delta = generalDelta(a, b, c);
  const zeroPointsResult = zeroPoints(delta, a, b);
  const coordinatesResult = coordinates(delta, a, b);
  return { delta, zeroPointsResult, coordinatesResult };
}
