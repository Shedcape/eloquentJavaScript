let number = Number(prompt("Give a number"));
function isEven(number){
  if(number === 0){
    return true;
  } else if (number === 1){
    return false;
  } else if (number > 1) {
    return isEven(number -2);
  } else {
    return isEven(number +2);
  }
}
