const encoderPart1 = (input, pre) => {
  let invalid = 0;
  let arr = input.split(/\n/).slice(pre).map(Number);
  let first = 0;
  let last = pre;
  for (let i = 0; i < arr.length; i++) {
    let preamble = input.split(/\n/).slice(first, last).map(Number);
    let pSums = [];
    for (let p = 0; p < pre-1; p++) {
      for (let j = p+1; j < pre; j++) {
        pSums.push(preamble[p]+preamble[j]);
      }
    }
    if (!pSums.includes(arr[i])){
      invalid = arr[i];
      return invalid;
    }
    first += 1;
    last += 1;
  }
};

// Start from first number in array and keep adding next number until equal or larger than the number we are looking for
// Keep track of first and last index
// Search for max and min in the range and add

const encoderPart2 = (input, preamble) => {
  let firstMissingNumber = encoderPart1(input,preamble);
  let arr = input.split(/\n/).map(Number);
  let first = 0
  let last = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i+1; j < arr.length; j++) {
      sum += arr[j]
      if (sum > firstMissingNumber) {
        break;
      }
      if (sum === firstMissingNumber) {
        first = i;
        last = j;
        let range = arr.slice(first, last+1).sort();
        return range[0] + range.slice(-1)[0];
      }
    }
  }
}

let testCase1 =
  `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

// console.log("Test case 1 for part 1 is 127: " + (encoderPart1(testCase1, 5) === 127));
// console.log("Test case 1 for part 2 is 62: " + (encoderPart2(testCase1, 5) === 62));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day09.txt").toString('utf-8');
console.log("Puzzle of the day, part 1: " + encoderPart1(puzzleInput, 25));
console.log("Puzzle of the day, part 2: " + encoderPart2(puzzleInput, 25));