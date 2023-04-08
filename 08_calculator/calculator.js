const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numArray) {
  if (numArray.length === 0) {
    return 0;
  } else {
    let result = 0
    for (num of numArray) {
      result += num;
    }
    return result;
  }

};

const multiply = function (numArray) {
  let result = 1;
  for (num of numArray) {
    result *= num;
  }
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
