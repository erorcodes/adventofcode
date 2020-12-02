const isValidPassword = (min, max, char, password) => {
  let regExp = new RegExp(char, "g");
  let pwLength = (password.match(regExp) || []).length;
  return pwLength >= min && pwLength <= max;
}
// Test of isValidPasswords
// console.log(isValidPassword(1, 3, 'b', 'cdefg')); //false
// console.log(isValidPassword(2, 9, 'c', 'ccccccccc')); //true
// console.log(isValidPassword(11, 19, 'c', 'ccccccccccccccc')); //true

const passwordPhilosophy = (input) => {
  let validPasswords = 0;
  let arr = input.split("\n");

  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].trim().split(':');

    let pw = newArr[1].trim();

    let minMax = newArr[0].split(' ')[0].split('-');

    let char = newArr[0].split(' ')[1];

    if (isValidPassword(minMax[0], minMax[1], char, pw)) validPasswords++;
  }

  return validPasswords;
}

// Tests
let testCase1 =
  `1-3 a: abcde
  1-3 b: cdefg
  2-9 c: ccccccccc`
console.log('Test case 1: ' + (passwordPhilosophy(testCase1) === 2));

let testCase2 =
  `2-5 e: selleles
  1-3 g: cdefg
  7-11 l: lllllmlllfllll
  1-3 b: cdefg
  11-17 l: llmlllfllllmlllfllll
  2-9 c: ccccccccc`
console.log('Test case 2: ' + (passwordPhilosophy(testCase2) === 4));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day02.txt").toString('utf-8');
console.log('Puzzle of the day: ' + passwordPhilosophy(puzzleInput));