import {changeTextColor} from './taskColors.js';

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');



text1.addEventListener('click', changeTextColor());
text2.addEventListener('click', changeTextColor());
text3.addEventListener('click', changeTextColor());
