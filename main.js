//less-2
//first task

let user = 'John Doe';
console.log(user);

const student = 'Ilya Korol';
console.log(student);

user = student;
console.log(user); //variable user has changed its value to 'Ilya Korol'
console.log('----------');

// second task

let test = 1;
test++; //added 1 to variable test, result = 2
test += '1'; // number(test) is converting to string(test) and will be '21'
console.log(test);

test--; //minus 1 from test, result = 1
console.log(test);

test = !!test; // typeof test is boolean
console.log(test);
console.log('----------');

//third task

const mas1 = [2, 3, 5, 8];
let resultMult = 1;

for (let i = 0; i < mas1.length; i++) {
  resultMult *= mas1[i];
}
console.log(resultMult);
console.log('----------');

//fourth task

const mas2 = [2, 5, 8, 15, 0, 6, 20, 3];
let num = ' ';

for (let i = 0; i < mas2.length; i++) {
  if (mas2[i] > 5 && mas2[i] < 10) {
    num += mas2[i];
    num += ' ';
  }
}
console.log(num);
console.log('----------');

//fifth task

const mas3 = [2, 5, 8, 15, 0, 6, 20, 3];
let numEven = ' ';

for (let i = 0; i < mas3.length; i++) {
  if (mas3[i] % 2 === 0 && mas3[i] !== 0) {
    numEven += mas3[i];
    numEven += ' ';
  }
}
console.log(numEven);
console.log('----------');

// less-3
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
console.log('----------');

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

changeZero();
console.log(arr);

//less-4
//task 1

export function sum(a) {
  return function sumDop(b) {
    return a + b;
  };
}

console.log(sum(5)(2));

//task 2

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const changeTextColor = () => {
  let i = 0;
  return function changeColor(event) {
    event.target.style.color = colors[i];
    i++;
    if (i === colors.length) {
      i = 0;
    }
  };
};

text1.addEventListener('click', changeTextColor());
text2.addEventListener('click', changeTextColor());
text3.addEventListener('click', changeTextColor());

