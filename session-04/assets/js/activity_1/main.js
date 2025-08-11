let divideForm = document.getElementById("division");

import myDivide, { add, subtract } from "./math.js";

console.log(add(3, 2)); // 5
console.log(subtract(5, 2)); // 3
console.log(myDivide(5, 2)); // 3

// create default muliply function

// give division function alias myDivide

// render the results out into UI

function outputMyDivide() {
  let a = document.getElementById("divide1").value;
  let b = document.getElementById("divide2").value;

  let output = myDivide(a, b);

  return output;
}

let divisionOutput = document.getElementById("divideOutput");

divisionOutput.innerText = output;

divideForm.addEventListener("submit", outputMyDivide);
