// Create structure for what a correct passport contains (sorted alphabetically)
// Split list into separate passports (array?)
// Create a list/array for each passport, strip away anything after :
// Compare the array to the correct format

let passportStructure = [
  'byr',
  // 'cid',
  'ecl',
  'eyr',
  'hgt',
  'hcl',
  'iyr',
  'pid',
];

const passportPhilosophy = (passportInput) => {
  let validPassports = 0;
  let passportList = passportInput.split(/\n\n/).map(p => p.split(/\s|\n/)).map(p => p.map(t => t.replace(/:.+/, '')));
  for (const p in passportList) {
    // console.log("Passport: " + passportList[p]);
    if (passportStructure.every(e => passportList[p].includes(e))) validPassports++;
  }
  return validPassports;
}

// Tests
let testCase1 =
`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

console.log('Test case 1: ' + (passportPhilosophy(testCase1) === 2));
// console.log('Test case 1, part 2: ' + (passportPhilosophy(testCase1, true) === 1));

// Puzzle of the day
const fs = require("fs");
const puzzleInput = fs.readFileSync("./day04.txt").toString('utf-8');
console.log('Puzzle of the day, part 1: ' + passportPhilosophy(puzzleInput));
// console.log('Puzzle of the day, part 2: ' + passportPhilosophy(puzzleInput, true));