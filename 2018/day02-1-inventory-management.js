const fs = require("fs");
const day2Input = fs.readFileSync("./input-day02.txt").toString('utf-8');

const inventoryManager = (input) => {
  const inputAsArray = input.split("\n").map(String);
  // console.log(inputAsArray);

  let two = 0;
  let three = 0;

  inputAsArray.forEach((boxId) => {
    let occurrences = [];

    // Make string into array
    const boxIdAsArray = boxId.split("");
    // console.log(boxIdAsArray);

    // Check for each letter in the string how many times it occur
    boxIdAsArray.forEach(letter => {
      let letterCount = boxIdAsArray.filter(l => l === letter).length;
      letterCount > 1 && occurrences.push(letterCount);
    });


    // console.log('occurrences: ' + occurrences);

    // Check if the array contains at least one of 2 and/or 3, if so add it to the count
    occurrences.includes(2) && two++;
    occurrences.includes(3) && three++;

  });
  console.log("Two: " + two);
  console.log("Three: " + three);
  // console.log("Two * Three is: " + two * three);
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
console.log("Test case: " + (inventoryManager(testCase) === 12));

console.log("With day 2 input: " + inventoryManager(day2Input));
