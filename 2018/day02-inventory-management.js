const fs = require("fs");
const day2Input = fs.readFileSync("./input-day02.txt").toString('utf-8');

const inventoryManager = (input) => {
  const inputAsArray = input.split("\n").map(String);
  let two = 0;
  let three = 0;
  
  inputAsArray.forEach((id) => {
    const idAsArray = id.split("").map(String);
    console.log(idAsArray);
    // idAsArray.forEach()
  });
  
  
  return two * three;
};

const testCase =
`abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

// TESTS, VERY BASIC
console.log(inventoryManager(testCase) === 12);

// console.log(inventoryManager(day2Input));
