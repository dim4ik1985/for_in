import orderByProps from '../basic';

test('правильная структура объекта', () => {
  const personParam = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sortMethod = ['name', 'level'];
  const heroes = orderByProps(personParam, sortMethod);
  const correct = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(heroes).toEqual(correct);
});
