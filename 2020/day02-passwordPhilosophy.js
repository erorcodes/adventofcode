const isValidPassword = (min, max, char, password) => {
  let regExp = new RegExp(char, "g");
  let pwLength = (password.match(regExp) || []).length;
  return pwLength >= min && pwLength <= max;
};

const isActuallyValidPassword = (first, second, char, password) => {
  let one = password.substring(first-1, first) === char;
  let two = password.substring(second-1, second) === char;
  return (one && !two) || (!one && two);
};

const passwordPhilosophy = (input, validation = false) => {
  let validPasswords = 0;
  let arr = input.split("\n");

  for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].trim().split(':');
    let pw = newArr[1].trim();
    let numbers = newArr[0].split(' ')[0].split('-');
    let char = newArr[0].split(' ')[1];

    if (!validation && isValidPassword(numbers[0], numbers[1], char, pw)) validPasswords++;
    if (validation && isActuallyValidPassword(numbers[0], numbers[1], char, pw)) validPasswords++;
  }

  return validPasswords;
};

// Tests
let testCase1 =
  `1-3 a: abcde
  1-3 b: cdefg
  2-9 c: ccccccccc`;
console.log('Test case 1: ' + (passwordPhilosophy(testCase1) === 2));
console.log('Test case 1, part 2: ' + (passwordPhilosophy(testCase1, true) === 1));

let testCase2 =
  `2-5 e: selleles
  1-3 g: cdefg
  7-11 l: lllllmlllffllll
  1-3 b: cdbfg
  11-17 l: llmlllfllllmlllfllll
  2-9 c: ccccccccc`;
console.log('Test case 2: ' + (passwordPhilosophy(testCase2) === 5));
console.log('Test case 2, part 2: ' + (passwordPhilosophy(testCase2, true) === 2));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day02.txt").toString('utf-8');
console.log('Puzzle of the day, part 1: ' + passwordPhilosophy(puzzleInput));
console.log('Puzzle of the day, part 2: ' + passwordPhilosophy(puzzleInput, true));