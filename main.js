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
console.log(test);

test--; //minus 1 from test, result = 1
console.log(test);

test = true; // typeof test is boolean
console.log(test);
console.log('----------');

//third task

const mas1 = [2, 3, 5, 8];
let result1 = 1;

for (let i = 0; i < mas1.length; i++) {
  result1 *= mas1[i];
}
console.log(result1);
console.log('----------');

//fourth task

const mas2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < mas2.length; i++) {
  let a = ' ';
  a = mas2[i];
  if (a > 5 && a < 10) {
    console.log(a);
  }
}
console.log('----------');

//fifth task

const mas3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < mas3.length; i++) {
  let b = ' ';
  b = mas3[i];
  if (b % 2 === 0 && b !== 0) {
    console.log(b);
  }
}
console.log('----------');
