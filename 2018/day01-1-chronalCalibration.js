const fs = require("fs");
const day1Input = fs.readFileSync("./input-day01.txt").toString('utf-8');

const frequencyChanger = (input) => {
  const inputAsArray = input.split("\n").map(Number);
  let resultingFrequency = 0;
  
  inputAsArray.forEach((change) => {
    resultingFrequency = resultingFrequency + change;
  });
  
  console.log(resultingFrequency);
  return resultingFrequency;
};

const testCase1 =
`+1
+1
+1`; // 3

const testCase2 =
`+1
+1
-2`; // 0

const testCase3 =
`-1
-2
-3`; // -6

const testCase4 =
`-100
+200
-300
-100
+200
-300
-100
+200
-300
-100
+200
-300
-100
+200
-300
-100
+200
-300
-100
+200
-300`; // -1400


// TESTS, VERY BASIC
console.log(frequencyChanger(testCase1) === 3);
console.log(frequencyChanger(testCase2) === 0);
console.log(frequencyChanger(testCase3) === -6);
console.log(frequencyChanger(testCase4) === -1400);

console.log(frequencyChanger(day1Input));
