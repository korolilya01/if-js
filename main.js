// new task 1
const palindrom = function (word) {
  for (let i = 0; i < word.length; i++) {
    return word[i] === word[word.length - 1] ? true : false; // reverse order in array
  }
};
console.log(palindrom('шалаш')); //true
console.log(palindrom('утка')); //false
console.log(palindrom('1234321')); //true
console.log(palindrom('level')); //true

// new task 2
const min = function (a, b) {
  return a < b ? a : b; //return min value if true
};
console.log(min(1, 12));

console.log('----------');

const max = function (a, y) {
  return a < y ? y : a; //return max value if true
};

console.log(max(2, 30));
console.log('----------');

// new task 3
const arr = [0, 15, 27, 30, 44, 51, 60, 77, 89, 90, 100];

function changeZero() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = 'zero';
    } else if (arr[i] % 100 === 0) {
      arr[i] = arr[i] / 100 + 'zerozero';
    } else if (arr[i] % 10 === 0) {
      arr[i] = arr[i] / 10 + 'zero';
    }
  }
}
console.log(changeZero());
console.log(arr);
