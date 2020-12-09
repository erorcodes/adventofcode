const splittedInput = input => input.split(/\n\n/).map(i => i.split(/\n/)).map(e => {
  let arr = [];
  for (let i = 0; i < e.length; i++) {
    e[i].length > 1 ? e[i].split("").forEach(t => arr.push(t)) : arr.push(e[i]);
  }
  return arr;
});

const countedArray = arr => arr.map(a => [...new Set(a)]).map(a => a.length).reduce((prev, curr) => prev + curr, 0);

let testCase1 =
  `abc

a
b
c

ab
ac

a
a
a
a

b`;
console.log("Test case part 1: " + (countedArray(splittedInput(testCase1)) === 11));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day06.txt").toString('utf-8');
console.log("Puzzle of the day, part 1: " + countedArray(splittedInput(puzzleInput)));