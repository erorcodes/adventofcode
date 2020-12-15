
const rambunctiousRecitation = (input) => {
  let numbers = [0];
  input.forEach(i => numbers.push(i));
  for (let i = input.length; i < 2020; i++) {
    // console.log("numbers[i]: " + numbers[i]);
    let current = numbers[i];
    if (!numbers.slice(1,i).includes(current)) {
      numbers.push(0);
      // console.log("numbers: " + numbers);
    } else {
      let backwardsNumbers = numbers.slice(1,i).reverse();
      // console.log("backwardsNumbers: " + backwardsNumbers);
      let count = backwardsNumbers.indexOf(current);
      numbers.push(count+1);
      // console.log("numbers: " + numbers);
    }
  }
  // console.log("numbers: " + numbers);
  // return [0,0,3,6,0,3,3,1,0,4,0];
  return numbers;
}
let testCase0 = [0,3,6];
// console.log('Test case 0: ' + (JSON.stringify(rambunctiousRecitation(testCase0)) === JSON.stringify([0,0,3,6,0,3,3,1,0,4,0])));
console.log('Test case 0: ' + (rambunctiousRecitation(testCase0)[2020] === 436));
let testCase1 = [1,3,2];
let testCase2 = [2,1,3];
let testCase3 = [1,2,3];
let testCase4 = [2,3,1];
let testCase5 = [3,2,1];
let testCase6 = [3,1,2];
console.log('Test case 1: ' + (rambunctiousRecitation(testCase1)[2020] === 1));
console.log('Test case 2: ' + (rambunctiousRecitation(testCase2)[2020] === 10));
console.log('Test case 3: ' + (rambunctiousRecitation(testCase3)[2020] === 27));
console.log('Test case 4: ' + (rambunctiousRecitation(testCase4)[2020] === 78));
console.log('Test case 5: ' + (rambunctiousRecitation(testCase5)[2020] === 438));
console.log('Test case 6: ' + (rambunctiousRecitation(testCase6)[2020] === 1836));

let puzzleInput = [2,1,10,11,0,6];
console.log("Puzzle of the day, part 1: " + rambunctiousRecitation(puzzleInput)[2020]);