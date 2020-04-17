const fs = require("fs");
const day2Input = fs.readFileSync("./input-day02.txt").toString('utf-8');

const inventoryManager = (input) => {
  const inputAsArray = input.split("\n").map(String);
  let two = 0;
  let three = 0;
  
  inputAsArray.forEach((id) => {
    const idAsArray = id.split("").map(String);
    // console.log(idAsArray);
    const count = Object.create(null);
    
    idAsArray.forEach(letter => {
      count[letter] = count[letter] ? count[letter] + 1 : 1;
      console.log(count);
    });
    console.log(count);


    for (let letter of Object.keys(count)) {
      if (count[letter] === 2) {
        two += 1;
        console.log("Adding a " + letter + " to 2")
      }
    }

    for (let letter of Object.keys(count)) {
      if (count[letter] === 3) {
        three += 1;
        console.log("Adding a " + letter + " to 3")
      }
    }
  });
  console.log("Two: " + two);
  console.log("Three: " + three);
  console.log(two * three);
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
