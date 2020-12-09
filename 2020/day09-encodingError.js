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

const encoderPart1 = (input, pre) => {
  let invalid = 0;
  let arr = input.split(/\n/).slice(pre).map(Number);
  // console.log("arr: " + arr);
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
    // console.log("pSums: " + pSums);
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
//

const encoderPart2 = (input, preamble) => {
  let constToSearchFor = encoderPart1(input,preamble);
  let arr = input.split(/\n/).map(Number);
  // console.log(constToSearchFor);
  let first = 0
  let last = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    // console.log("sum: " + sum);
    for (let j = i+1; j < arr.length; j++) {
      sum += arr[j]
      // console.log("sum: " + sum);
      if (sum > constToSearchFor) {
        // console.log("Too large!");
        break;
      }
      if (sum === constToSearchFor) {
        first = i;
        // console.log("first: " + first);
        last = j;
        // console.log("last: " + last);
        let range = arr.slice(first, last+1).sort();
        // console.log("range: " + range);
        // console.log("range min: " + range[0]);
        // console.log("range max: " + range.slice(-1)[0]);
        return range[0] + range.slice(-1)[0];
      }
    }
  }
}

// console.log("Test case 1 for part 1 is 127: " + (encoderPart1(testCase1, 5) === 127));
// console.log("Test case 1 for part 2 is 62: " + (encoderPart2(testCase1, 5) === 62));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day09.txt").toString('utf-8');
// console.log("Puzzle of the day, part 1: " + encoderPart1(puzzleInput, 25));
console.log("Puzzle of the day, part 2: " + encoderPart2(puzzleInput, 25));