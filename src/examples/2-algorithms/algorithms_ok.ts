/* eslint-disable @typescript-eslint/no-use-before-define */

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };

type MeasureSystem = { systemName: SystemNames; unitName: string; unitSymbol: string };

type SystemNames = 'US' | 'SI' | '?';

const PI = 3.14;
const HALVE = 0.5;

// ✔️ all the business knowledge is on the same place
const measureSystems: MeasureSystem[] = [
  { systemName: 'US', unitName: 'square yards', unitSymbol: 'yd2' },
  { systemName: 'SI', unitName: 'square metres', unitSymbol: 'm2' },
];

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

function getMeasureSystem(systemName: SystemNames): MeasureSystem {
  const defaultNotFound: MeasureSystem = {
    systemName: '?',
    unitName: '',
    unitSymbol: '',
  };
  const found = measureSystems.find(ms => ms.systemName === systemName);
  return found || defaultNotFound;
}

// ✔️ with no need for conditions we can use very simple arrow functions
const getUnitName = (systemName: SystemNames): string => getMeasureSystem(systemName).unitName;
const getUnitSymbol = (systemName: SystemNames): string => getMeasureSystem(systemName).unitSymbol;

// * Alternative: use a class for MeasureSystem instead of simple structure

const myCircle: Shape = { name: 'CIRCLE', radius: 5 };
const myArea = getArea(myCircle);
const areaTitle = myArea + getUnitSymbol('SI');
console.log(areaTitle);
const areaDescription = `My ${myCircle.name} occupies an area of ${myArea} ${getUnitName('SI')}`;
console.log(areaDescription);
