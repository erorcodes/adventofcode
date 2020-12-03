const buildPattern = (basePattern) => {
  // console.log("Pattern size X: " + basePattern[0].length);
  // console.log("Pattern size Y: " + basePattern.length);
  let multiplier = Math.ceil(basePattern.length * 3 / basePattern[0].length);
  // console.log("Multiplier: " + multiplier);
  for (let i = 0; i < basePattern.length; i++) {
    basePattern[i] = basePattern[i].trim().repeat(multiplier);
  }
  return basePattern;
};

const tobogganTrajectory = (input) => {
  let arr = input.split("\n");
  const landscape = buildPattern(arr);
  let positionX = 0;
  let positionY = 0;
  let treeCount = 0;
  for (let i = 1; i < arr.length; i++) {
    positionX += 3;
    positionY += 1;
    // console.log(landscape[positionY].substr(positionX, 1));
    if (landscape[positionY].substr(positionX, 1) === '#') treeCount++;
  }
  return treeCount;
};

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

console.log("Test case 1 is 7: " + (tobogganTrajectory(testCase1) === 7));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day03.txt").toString('utf-8');
console.log("Puzzle of the day, part 1: " + tobogganTrajectory(puzzleInput));
