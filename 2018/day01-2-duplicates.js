const fs = require("fs");
const day1Input = fs.readFileSync("./input-day01.txt").toString('utf-8');

const duplicateChecker = (input) => {
  let inputAsArray = input.split("\n").map(Number);
  let resultingFrequency = 0;
  let frequencies = [];
  let onlyUnique = true;
  
  while (onlyUnique === true) {
    for (const change of inputAsArray) {
      resultingFrequency = resultingFrequency + change;
      if (frequencies.includes(resultingFrequency)) {
        onlyUnique = false;
        break;
      }
      frequencies.push(resultingFrequency);
    }
  }
  return resultingFrequency;
};

const testCase1 =
`+1
-1`; // 1

const testCase2 =
`+3
+3
+4
-2
-4`; // 10

const testCase3 =
`-6
+3
+8
+5
-6`; // -6

const testCase4 =
`+7
+7
-2
-7
-4`; // 14


// TESTS, VERY BASIC
console.log(duplicateChecker(testCase1) === 1);
console.log(duplicateChecker(testCase2) === 10);
console.log(duplicateChecker(testCase3) === 5);
console.log(duplicateChecker(testCase4) === 14);

console.log(duplicateChecker(day1Input));
