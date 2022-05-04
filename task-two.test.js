const reversedStr = require('./task-two.js');

test('to check if string is revervesed', () => {
  const str = 'gender';
  expect(reversedStr(str)).toBe('redneg');
});
