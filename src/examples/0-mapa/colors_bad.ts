// ❌ First switch found, bad smell
function getColorByCode(status: number) {
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

// ❌ Chances that the same switch appears again
function getIconByCode(status: number) {
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

// ❌ Ok, I quit.
function getStatusConfig(status) {
  switch (status) {
    case 0:
      return { color: 'Black', icon: '🎈' };
    case 1:
      return '🎆';
    case 2:
      return '🧨';
    default:
      break;
  }
}