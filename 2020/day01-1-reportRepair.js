const fs = require("fs");
const day01input = fs.readFileSync("./day01.txt").toString('utf-8');

function reportRepair(input) {
  let arr = input.split("\n").map(Number);
  let sum = 0;
  let a, b;

  // Take first number in array and set as A
  for (let i = 0; i < arr.length; i++) {
    a = arr[i];

    for (let j = 1; j < arr.length; j++) {
      // Add A and B
      b = arr[j];

      sum = a + b;

      // If sum is not 2020, set next number to B and try again
      console.log('Sum is ' + sum);

      if (sum === 2020){
        // Multiply final A and B
        return a * b;
      }
    }
  }

}

let testCase1 =
  `1721
  979
  366
  299
  675
  1456`; // 514579

let testCase2 =
  `979
  1721
  366
  675
  299
  1456`; // 514579

console.log('Test case 1: ' + reportRepair(testCase1));
console.log('Test case 2: ' + reportRepair(testCase2));
console.log('Day 1: ' + reportRepair(day01input));