const stringLength = require('./task-one.js');

test('length of string', () => {
  expect(stringLength('bob')).toBe(3);
});