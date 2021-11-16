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

function getStatusConfiguration(statusId) {
  const configuration = STATUS_CONFIGURATIONS.find(s => s.id === statusId);
  const defaultConfiguration = { id: statusId, color: 'White', icon: '' };
  return configuration || defaultConfiguration;
}
