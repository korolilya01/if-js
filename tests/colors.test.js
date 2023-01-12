import { changeTextColor } from '../src/taskColors.js';
import expect from 'expect';

// eslint-disable-next-line no-undef
test('change color after click', () => {
  expect(changeTextColor()).not.toBe(undefined);
});
