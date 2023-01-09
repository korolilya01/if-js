import {sum} from "../main.js";
import expect from "expect";


// eslint-disable-next-line no-undef
test('five plus two is seven', () => {
  const a = 5;
  const b = 2;
  expect(sum(a)(b)).toBe(7);
});
