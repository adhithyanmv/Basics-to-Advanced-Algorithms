//this is somewhat closer to AI according top mit professor
function fillWithNums(board) {
  let data = [];
  for (let i = 0; i < board.length; i++) {
    let curr = board[i];
    let temp = [];
    for (let j = 0; j < curr.length; j++) {
      if (Number(curr[j])) temp.push(Number(curr[j]));
      else {
        temp.push(0);
      }
    }
    data.push(temp);
  }
  return data;
}

let solveSudoku = function (board) {
  let fill = fillWithNums(board);
  console.log(fill);
};
solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
