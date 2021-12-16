function declaration(num1, num2) {
  const squared1 = num1 * num1;
  const squared2 = num2 * num2;
  const add1 = squared1 + squared2;
  const squared3 = add1 * add1;
  return squared3;
}

const sum = declaration(3, 6);
console.log(sum);

const expression = function (firstNum, secondNum) {
  const squaredFirst = firstNum * firstNum;
  const squaredSecond = secondNum * secondNum;
  const addFirst = squaredFirst + squaredSecond;
  const squaredThird = addFirst * addFirst;
  return squaredThird;
};
const outcome = expression(3, 6);
console.log(outcome);

const arrow = (number1, number2) => {
  const sqrd1 = number1 * number1;
  const sqrd2 = number2 * number2;
  const sum1 = sqrd1 + sqrd2;
  const sqrd3 = sum1 * sum1;
  return sqrd3;
};

const total = arrow(3, 6);
console.log(total);
