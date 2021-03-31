/* eslint-disable @typescript-eslint/no-use-before-define */
type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };
type MeasureSystem = { measureSystem: string; unitName: string; unitSymbol: string };
// ✔️ all the business knowledge is on the same place
const measureSystems: MeasureSystem[] = [
  { measureSystem: 'US', unitName: 'square yards', unitSymbol: 'yd2' },
  { measureSystem: 'SI', unitName: 'square metres', unitSymbol: 'm2' },
];

const PI = 3.14;
const HALVE = 0.5;

// ✔️ a data object could be loaded or modified at run time
export const areaCalculators = {
  TRIANGLE: (shape: Shape): number => HALVE * shape.base * shape.height,
  SQUARE: (shape: Shape): number => shape.height * shape.height,
  RECTANGLE: (shape: Shape): number => shape.height * shape.width,
  CIRCLE: (shape: Shape): number => PI * shape.radius * shape.radius,
};

// ✔️ this function never gets modified
export function getArea(shape: Shape): number {
  const calulateArea = areaCalculators[shape.name];
  return calulateArea(shape);
}

// 💉 inject another shape without modifying
// areaCalculators['SPHERE'] = shape => 4 * 3.14 * shape.radius * shape.radius;

// ✔️ with no need for conditions we can use very simple arrow functions
export const getUnitNames = (measureSystem: string): string =>
  getMeasureSystem(measureSystem).unitName;

export const getUnitSymbol = (measureSystem: string): string =>
  getMeasureSystem(measureSystem).unitSymbol;

const getMeasureSystem = (measureSystem: string): MeasureSystem =>
  measureSystems.find(ms => ms.measureSystem === measureSystem);

// * Alternative: use a class for MeasureSystem instead of simple structure

const myCircle: Shape = { name: 'CIRCLE', radius: 5 };
const myArea = getArea(myCircle);
const areaTitle: string = myArea + getUnitSymbol('EU');
console.log(areaTitle);
const areaDescription = `My ${myCircle.name} occupies an area of ${myArea}${getUnitNames('EU')}`;
console.log(areaDescription);
