// 0- black
// 1- blue
// 2- red
// 3- gray
function getColorByCode(status: number) {
  let color = '';
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

function getIconoByCode(status: number) {
  let color = '';
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

function getStatusConfig(status) {
  switch (status) {
    case 0:
      return { color: 'Black', icono: '🎈', otra: '' };
    case 1:
      return '🎆';
    case 2:
      return '🧨';
    default:
      break;
  }
}

const colors = [{ id: 0, color: 'Black', icono: '🎈' }, {}, {}];
