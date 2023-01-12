export function sum(a) {
  return function sumDop(b) {
    return a + b;
  };
}

console.log(sum(5)(2));
