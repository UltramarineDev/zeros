module.exports = function zeros(expression) {
  var arr = expression.split('*');

  var arrNumbers = [];
  for (i = 0; i < arr.length; i++) {
    let integer = parseInt(arr[i]);
    let step;
    let start;
    let integerStr = integer.toString();
    if ((arr[i].length-integerStr.length) === 1) {
      step = 1;
      start = 1;
      arrNumbers[i] = factorial(integer, step, start);

    } else {
      step = 2;
      if (integer % 2 === 0) {
        n = 2;
        start = 2;
        arrNumbers[i] = factorial(integer, step, start);
      } else {
        n = 2;
        start = 1;
        arrNumbers[i] = factorial(integer, step, start);
      }
    }
  }

  let result = arrNumbers[0];
  for (i = 1; i < arrNumbers.length; i++) {
    result *= arrNumbers[i];
  }
  let matches = 0;
  while (result) {
    if (result % 10 === 0) {
      matches++;
    }
    result = result/10;
    result = Math.trunc(result);
  }

  return matches;
}  

function factorial(integer, step, start) {
    return (integer != start) ? integer * factorial(integer - step, step, start) : start;
  }
/*
  var expression = "10!";
  var arr = expression.split('*');
  var arrNumbers = [];
  for (i = 0; i < arr.length; i++) {
    let integer = parseInt(arr[i]);
    let step;
    let start;
    if ((integer.toString().length - arr.length) === 1) {
      step = 1;
      start = 1;
      arrNumbers[i] = factorial(integer, step, start);

    } else {
      step = 2;
      if (integer % 2 === 0) {
        n = 2;
        start = 2;
        arrNumbers[i] = factorial(integer, step, start);
      } else {
        n = 2;
        start = 1;
        arrNumbers[i] = factorial(integer, step, start);
      }
    }
  }

  let result;
  for (i = 0; i < arrNumbers.length; i++) {
    result *= arrNumbers[i];
  }
  let matches = 0;
  while (result) {
    if (result % 10 == 0) {
      matches++;
    }
    result /= 10;
  }

  console.log(matches);

function factorial(integer, step, start) {
    return (integer != start) ? integer * factorial(integer - step) : start;
  }*/