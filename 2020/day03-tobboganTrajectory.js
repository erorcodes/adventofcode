const buildPattern = (basePattern, slopeX, slopeY) => {
  // console.log("Pattern size X: " + basePattern[0].length);
  // console.log("Pattern size Y: " + basePattern.length);
  let stepsY = basePattern.length / slopeY;
  console.log("Number of steps down: " + stepsY);
  let multiplier = Math.ceil(stepsY * slopeX / basePattern[0].length);
  console.log("Multiplier: " + multiplier);
  for (let i = 0; i < basePattern.length; i++) {
    basePattern[i] = basePattern[i].trim().repeat(multiplier);
  }
  return basePattern;
};

let slopes = [
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2]
];

const tobogganTrajectory = (input, slopeX, slopeY) => {
  let arr = input.split("\n");
  const landscape = buildPattern(arr, slopeX, slopeY);
  let positionX = 0;
  let positionY = 0;
  let treeCount = 0;
  for (let i = 1; i < arr.length; i++) {
    positionX += slopeX;
    positionY += slopeY;
    if ((positionY < arr.length) && landscape[positionY].substr(positionX, 1) === '#') treeCount++;
  }
  return treeCount;
};

const countForAllSlopes = (input, slopes) => {
  let total = tobogganTrajectory(input, slopes[0][0], slopes[0][1]);
  for (let i = 1; i < slopes.length; i++) {
    total *= tobogganTrajectory(input, slopes[i][0], slopes[i][1]);
    console.log("Total is : " + total);
  }
  return total;
}

let testCase1 =
  `..##.......
  #...#...#..
  .#....#..#.
  ..#.#...#.#
  .#...##..#.
  ..#.##.....
  .#.#.#....#
  .#........#
  #.##...#...
  #...##....#
  .#..#...#.#`

console.log("Test case 1 for part 1 is 7: " + (tobogganTrajectory(testCase1, 3, 1) === 7));
console.log("Test case 1 for part 2 slope 1 is 2: " + (tobogganTrajectory(testCase1, slopes[0][0], slopes[0][1]) === 2));
console.log("Test case 1 for part 2 slope 2 is 7: " + (tobogganTrajectory(testCase1, slopes[1][0], slopes[1][1]) === 7));
console.log("Test case 1 for part 2 slope 3 is 3: " + (tobogganTrajectory(testCase1, slopes[2][0], slopes[2][1]) === 3));
console.log("Test case 1 for part 2 slope 4 is 4: " + (tobogganTrajectory(testCase1, slopes[3][0], slopes[3][1]) === 4));
console.log("Test case 1 for part 2 slope 5 is 2: " + (tobogganTrajectory(testCase1, slopes[4][0], slopes[4][1]) === 2));
console.log("Test case 1 for part 2 is 336: " + (countForAllSlopes(testCase1, slopes) === 336));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day03.txt").toString('utf-8');
console.log("Puzzle of the day, part 1: " + tobogganTrajectory(puzzleInput, 3, 1));
console.log("Puzzle of the day, part 2: " + countForAllSlopes(puzzleInput, slopes));