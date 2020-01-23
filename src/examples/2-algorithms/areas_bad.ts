/* eslint-disable max-lines-per-function */
// ❌ switch cases don´t scale well
export function getArea(shape: Shape): number {
  const PI = 3.14;
  const HALVE = 0.5;
  let area: number;
  switch (shape.name) {
    case 'TRIANGLE':
      area = shape.base * shape.height * HALVE;
      break;
    case 'SQUARE':
      area = shape.height * shape.height;
      break;
    case 'RECTANGLE':
      area = shape.height * shape.width;
      break;
    case 'CIRCLE':
      area = PI * shape.radius * shape.radius;
      break;
    default:
      throw new Error('shape not recognized');
  }
  return area;
}

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };
