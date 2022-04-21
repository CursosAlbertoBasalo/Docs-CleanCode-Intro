/* eslint-disable @typescript-eslint/no-use-before-define */

type Shape = { name: string; base?: number; height?: number; width?: number; radius?: number };

type MeasureSystemNames = 'US' | 'SI' | '?';

type MeasureSystem = { systemName: MeasureSystemNames; unitName: string; unitSymbol: string };

const PI = 3.14;
const HALVE = 0.5;

// ✔️ all the business knowledge is on the same place
const MEASURE_SYSTEMS: MeasureSystem[] = [
  { systemName: 'US', unitName: 'square yards', unitSymbol: 'yd2' },
  { systemName: 'SI', unitName: 'square metres', unitSymbol: 'm2' },
];

// ✔️ this function never gets modified
export function getArea(shape: Shape): number {
  const calculateArea = AREA_CALCULATORS[shape.name];
  return calculateArea(shape);
}

// ✔️ a data object with methods on each value
// ⚠️ could be loaded or modified at run time
export const AREA_CALCULATORS = {
  TRIANGLE: (shape: Shape): number => HALVE * shape.base * shape.height,
  SQUARE: (shape: Shape): number => shape.height * shape.height,
  RECTANGLE: (shape: Shape): number => shape.height * shape.width,
  CIRCLE: (shape: Shape): number => PI * shape.radius * shape.radius,
};

// 💉 inject another shape without modifying
AREA_CALCULATORS['SPHERE'] = (shape: { radius: number }) => 4 * PI * shape.radius ** 2;

function getMeasureSystem(systemName: MeasureSystemNames): MeasureSystem {
  const defaultNotFound: MeasureSystem = {
    systemName: '?',
    unitName: '',
    unitSymbol: '',
  };
  const found = MEASURE_SYSTEMS.find(ms => ms.systemName === systemName);
  return found || defaultNotFound;
}

// ✔️ with no need for conditions we can use very simple pure functions in a fat arrow notation
export const getUnitName = (systemName: MeasureSystemNames): string =>
  getMeasureSystem(systemName).unitName;
export const getUnitSymbol = (systemName: MeasureSystemNames): string =>
  getMeasureSystem(systemName).unitSymbol;

const myMeasureSystemName: MeasureSystemNames = 'SI';
const myCircle: Shape = { name: 'CIRCLE', radius: 5 };
const myArea = getArea(myCircle);
const myUnits = getUnitName(myMeasureSystemName);
const areaDescription = `My ${myCircle.name} occupies an area of ${myArea} ${myUnits}`;
console.log(areaDescription);
