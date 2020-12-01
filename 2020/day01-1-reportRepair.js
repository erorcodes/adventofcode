
const checkSum = (numbers) => numbers.reduce((acc, curr) => acc + curr);

function reportRepair(input) {
  let arr = input.split("\n").map(Number);
  let numbers = [];

  // Take first number in array and set as A
  for (let i = 0; i < arr.length; i++) {
    numbers[0] = arr[i];

    for (let j = 1; j < arr.length; j++) {
      // Add A and B
      numbers[1] = arr[j];

      // Check if sum is 2020
      if (checkSum(numbers) === 2020) {
        return numbers[0] * numbers[1];
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

const fs = require("fs");
const day01input = fs.readFileSync("./day01.txt").toString('utf-8');
console.log('Day 1: ' + reportRepair(day01input));