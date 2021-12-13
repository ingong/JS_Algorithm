let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);
let solution = 0;

let board = [];

function hasAnyQueensConflict(x) {
  for (let i = 0; i < x; i++) {
    if (board[i] === board[x] || Math.abs(board[x] - board[i]) === x - i) return true;
  }
  return false;
}

function findNQueen(row) {
  if (row === num) {
    solution++;
    return;
  }

  for (let col = 0; col < num; col++) {
    board[row] = col;
    if (!hasAnyQueensConflict(row)) findNQueen(row + 1);
  }
}

findNQueen(0);
console.log(solution);
