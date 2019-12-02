import findBy from '../app';

test('Success found', () => {
  const finder = findBy('name', 'урон');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const example = [
    {
      name: 'урон',
      type: 'help',
      description: 'Страница описания элемента интерфейса',
    },
  ];
  expect(results.filter(finder)).toEqual(example);
});