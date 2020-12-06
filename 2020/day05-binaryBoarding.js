let testInput =
`BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

// parse input data to create array of arrays of row + column with original input
// create same array but transformed into row number and column number
// do not forget that rows and columns are 0 indexed
// add seat ID to array
let rows = [...Array(128).keys()];
let columns = [...Array(8).keys()];

const calculateRow = binary => {
  let row = rows;
  binary.split('').forEach(b => {
    b === "F" ? row = row.slice(0,row.length/2) : row = row.slice(row.length/2)
  });
  return row[0];
};

const calculateColumns = binary => {
  let column = columns;
  binary.split('').forEach(b => {
    b === "L" ? column = column.slice(0,column.length/2) : column = column.slice(column.length/2)
  });
  return column[0];
};

const calculateSeatID = seat => seat[0] * 8 + seat[1];
const createBoardingPassList = input => input.split(/\n/).map(p => [p.slice(0,7), p.slice(7)]);

const seatIdList = input => createBoardingPassList(input).map(b => [calculateRow(b[0]), calculateColumns(b[1])]).map(seat => calculateSeatID(seat)).sort();

const findLargestID = input => seatIdList(input).reduce((acc, curr) => curr > acc ? curr: acc, 0);

const mySeatID = boardingPasses => {
  let seatIDList = seatIdList(boardingPasses);
  for (let i = 1; i < seatIDList.length; i++) {
    if ((seatIDList[i]+1 !== seatIDList[i+1]) && (seatIDList[i]+2 === seatIDList[i+1])){
      return seatIDList[i]+1;
    }
  }
}

const fs = require("fs");
const puzzleInput = fs.readFileSync("./day05.txt").toString('utf-8');
console.log("Puzzle of the day, part 1: " + findLargestID(puzzleInput));
console.log("Puzzle of the day, part 2: " + mySeatID(puzzleInput));
