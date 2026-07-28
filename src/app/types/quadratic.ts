export interface FunctionResults {
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
}