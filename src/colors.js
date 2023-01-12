const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

export const changeTextColor = () => {

  const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
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
