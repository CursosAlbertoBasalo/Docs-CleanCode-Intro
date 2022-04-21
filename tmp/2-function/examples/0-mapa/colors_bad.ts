// ❌ First switch found, bad smell
function getColorByCode(status: number): string {
  switch (status) {
    case 0:
      return 'Black';
    case 1:
      return 'Blue';
    case 2:
      return 'Red';
    default:
      break;
  }
}

// ❌❌ Chances that the same switch appears again
function getIconByCode(status: number): string {
  switch (status) {
    case 0:
      return '🎈';
    case 1:
      return '🎆';
    case 2:
      return '🧨';
    default:
      break;
  }
}

// ⚠️ This is not the way
function getStatusConfig(status: number): { color: string; icon: string } {
  switch (status) {
    case 0:
      return { color: 'Black', icon: '🎈' };
    case 1:
      return { color: 'Blue', icon: '🎆' };
    case 2:
      return { color: 'Red', icon: '🧨' };
    default:
      break;
  }
}

/** more examples
 * Discounts
 */

// < 10     units =>  0%
// 10 < 100 units => 10%
// > 100    units => 20%

// ❌ complex structure
function getDiscountIf(units: number) {
  let discount = 0;
  if (units < 10) {
    discount = 0;
  } else if (units < 100) {
    discount = 10;
  } else {
    discount = 100;
  }
  return discount;
}

// ❌❌ switch could be worst than else if
// function getDiscountSwitch(units: number) {
//   let discount = 0;
//   switch (units) {
//     case :

//       break;

//     default:
//       break;
//   }
// }
