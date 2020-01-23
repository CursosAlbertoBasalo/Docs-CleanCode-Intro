/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
// ❌
// import { getArea} from './areas_bad';
// ✔️
import { getArea } from './areas_ok';

describe('Calculate Area', () => {
  test('Triangle', () => {
    const shape = { name: 'TRIANGLE', base: 10, height: 8 };
    expect(getArea(shape)).toEqual(40);
  });
  test('Square', () => {
    const shape = { name: 'SQUARE', height: 8 };
    expect(getArea(shape)).toEqual(64);
  });
  test('Rectangle', () => {
    const shape = { name: 'RECTANGLE', width: 10, height: 8 };
    expect(getArea(shape)).toEqual(80);
  });
  test('Circle', () => {
    const shape = { name: 'CIRCLE', radius: 10 };
    expect(getArea(shape)).toEqual(314);
  });
  test('Sphere', () => {
    const shape = { name: 'SPHERE', radius: 10 };
    expect(() => {
      getArea(shape);
    }).toThrow();
  });
});
