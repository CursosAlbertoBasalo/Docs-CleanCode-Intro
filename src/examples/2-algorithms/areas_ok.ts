/* eslint-disable @typescript-eslint/no-use-before-define */
// ✔️
export const areaCalculators = {
  TRIANGLE: (shape: Shape): number => HALVE * shape.base * shape.height,
  SQUARE: (shape: Shape): number => shape.height * shape.height,
  RECTANGLE: (shape: Shape): number => shape.height * shape.width,
  CIRCLE: (shape: Shape): number => PI * shape.radius * shape.radius,
};
const PI = 3.14;
const HALVE = 0.5;

export function getArea(shape: Shape): number {
  const calculateArea = areaCalculators[shape.name];
  return calculateArea(shape);
}

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };

// 💉 inject another shape without modifying current code
// areaCalculators['SPHERE'] = shape => 4 * 3.14 * shape.radius * shape.radius;
