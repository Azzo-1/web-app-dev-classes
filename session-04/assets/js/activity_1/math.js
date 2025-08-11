export const add = function (a, b) {
  return a + b;
};
export const subtract = (a, b) => a - b;

// create default muliply function
export const multiply = (a, b) => a * b;

// create default division function

export const divide = (a, b) => a / b;

export default function myDivide(a, b) {
  let output = a + "divided by" + b + " =" + a / b;

  return output;
}
