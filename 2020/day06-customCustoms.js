const groupedAnswers = allAnswers => allAnswers.split(/\n\n/).map(i => i.split(/\n/));

const uniqueAnswers = allAnswers => groupedAnswers(allAnswers).map(answer => {
  let arr = [];
  for (let i = 0; i < answer.length; i++) {
    answer[i].length > 1 ? answer[i].split("").forEach(t => arr.push(t)) : arr.push(answer[i]);
  }
  return arr;
}).map(a => [...new Set(a)]).map(a => a.length).reduce((prev, curr) => prev + curr, 0);

const commonAnswers = allAnswers => {
  let common = 0;
  groupedAnswers(allAnswers).map(a => a.map(ans => ans.split("")))
    .forEach(group => {
    let checkedQuestions = [];
    for (const answerSheet of group) {
      for (const question of answerSheet) {
        if (!checkedQuestions.includes(question) && group.every((ans) => ans.includes(question))) {
          common++;
        }
        checkedQuestions.push(question);
      }
    }
  });
  return common;
};

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
console.log("Test case part 1: " + (uniqueAnswers(testCase1) === 11));
// console.log("Test case part 2: " + commonAnswers(testCase1));
console.log("Test case part 2: " + (commonAnswers(testCase1) === 6));

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day06.txt").toString('utf-8');
console.log("Puzzle of the day, part 1: " + uniqueAnswers(puzzleInput));
console.log("Puzzle of the day, part 2: " + commonAnswers(puzzleInput));