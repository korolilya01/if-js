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
