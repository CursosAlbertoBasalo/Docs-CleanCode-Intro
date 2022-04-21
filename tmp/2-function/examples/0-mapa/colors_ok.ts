// ✔️ Solve with a simple structure like an array or object map
const STATUS_CONFIGURATIONS = [
  {
    id: 0,
    color: 'Black',
    icon: '🎈',
  },
  {
    id: 1,
    color: 'Blue',
    icon: '🎆',
  },
  {
    id: 2,
    color: 'Red',
    icon: '🧨',
  },
];

function getStatusConfiguration(statusId: number) {
  const configuration = STATUS_CONFIGURATIONS.find(s => s.id === statusId);

  const defaultConfiguration = { id: statusId, color: 'White', icon: '' };

  return configuration || defaultConfiguration;
}

/** more examples
 * Discounts
 */

// < 10     units =>  0%
// 10 < 100 units => 10%
// > 100    units => 20%

// ✔️ Solve with a structure
const RANGE_DISCOUNTS = [
  {
    min: 0,
    max: 10,
    discount: 0,
  },
  {
    min: 10,
    max: 100,
    discount: 10,
  },
  {
    min: 100,
    max: 10000,
    discount: 10,
  },
];

function getDiscountMap(units: number) {
  const rangeDiscount = RANGE_DISCOUNTS.find(x => units < x.max);
  const defaultRange = RANGE_DISCOUNTS[0];
  return rangeDiscount || defaultRange;
}
