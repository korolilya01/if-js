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
let resultMult = 1;

for (let i = 0; i < mas1.length; i++) {
  resultMult *= mas1[i];
}
console.log(resultMult);
console.log('----------');

//fourth task

const mas2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < mas2.length; i++) {
  let num = ' ';
  num = mas2[i];
  if (num > 5 && num < 10) {
    console.log(num);
  }
}
console.log('----------');

//fifth task

const mas3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < mas3.length; i++) {
  let numEven = ' ';
  numEven = mas3[i];
  if (numEven % 2 === 0 && numEven !== 0) {
    console.log(numEven);
  }
}
console.log('----------');
