const stringLength = require('./task-one.js');

test('character count is greater than 0', () => {
  const str = 'bob';
  expect(stringLength(str)).toBeGreaterThan(0);
});

test('character count is less than or equal to 10', () => {
  const str = 'bob';
  expect(stringLength(str)).toBeLessThanOrEqual(10);
});
