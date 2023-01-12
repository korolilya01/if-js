import { sum } from '../src/sumOfTwoNum.js';
import expect from 'expect';

// eslint-disable-next-line no-undef
test('sum of two numbers', () => {
  const a = 5;
  const b = 2;
  expect(sum(a)(b)).toBe(7);
});
