/* eslint-disable @typescript-eslint/no-use-before-define */
// ✔️
export const areaCalculator = {
  TRIANGLE: (shape: Shape): number => HALVE * shape.base * shape.height,
  SQUARE: (shape: Shape): number => shape.height * shape.height,
  RECTANGLE: (shape: Shape): number => shape.height * shape.width,
  CIRCLE: (shape: Shape): number => PI * shape.radius * shape.radius,
};
const PI = 3.14;
const HALVE = 0.5;

export function getArea(shape: Shape): number {
  const calulator = areaCalculator[shape.name];
  return calulator(shape);
}

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };

// 💉 inject another shape without modifying
// areaCalculator['SPHERE'] = shape => 4 * 3.14 * shape.radius * shape.radius;
