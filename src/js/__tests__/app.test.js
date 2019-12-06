/* eslint-disable linebreak-style */
import findBy from '../app';

test('Success name, урон', () => {
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

test('Success type, character', () => {
  const finder = findBy('type', 'character');
  const results = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];
  const example = [
    {
      name: 'маг',
      type: 'character',
      description: 'Персонаж, обладающий магическими способностями',
    },
  ];
  expect(results.filter(finder)).toEqual(example);
});
