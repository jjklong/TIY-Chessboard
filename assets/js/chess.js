//  var board = [  0   1   2   3   4   5   6   7
//
//           0   ['R','N','B','Q','K','B','N','R'],
//           1   ['P','P','P','P','P','P','P','P'],
//           2   [' ',' ',' ',' ',' ',' ',' ',' '],
//           3   [' ',' ',' ',' ',' ',' ',' ',' '],
//           4   [' ',' ',' ',' ',' ',' ',' ',' '],
//           5   [' ',' ',' ',' ',' ',' ',' ',' '],
//           6   ['p','p','p','p','p','p','p','p'],
//           7   ['r','n','b','q','k','b','n','r']
//              ];

// moves: [Y][X] --> [Y][X]
//    1)  [6][3] --> [4][3]
//    2)  [0][6] --> [2][5]
//    3)  [6][2] --> [4][2]
//    4)  [1][4] --> [2][4]
//    5)  [6][6] --> [5][6]
//    6)  [1][3] --> [3][3]
//    7)  [7][5] --> [6][6]
//    8)  [0][5] --> [1][4]
//    9)  [7][6] --> [5][5]

//PUT THE ROWS INTO INDIVIDUAL ARRAYS = VERY WET, MAKE IT DRY LATER
var row1arr = [];
$('i','.chessRow_one').each(function(){
  row1arr.push($(this).attr('class'));
});
console.log(row1arr);

var row2arr = [];
$('i','.chessRow_two').each(function(){
  row2arr.push($(this).attr('class'));
});
console.log(row2arr);

var row3arr = [];
$('i','.chessRow_three').each(function(){
  row3arr.push($(this).attr('class'));
});
console.log(row3arr);

var row4arr = [];
$('i','.chessRow_four').each(function(){
  row4arr.push($(this).attr('class'));
});
console.log(row4arr);

var row5arr = [];
$('i','.chessRow_five').each(function(){
  row5arr.push($(this).attr('class'));
});
console.log(row5arr);

var row6arr = [];
$('i','.chessRow_six').each(function(){
  row6arr.push($(this).attr('class'));
});
console.log(row6arr);

var row7arr = [];
$('i','.chessRow_seven').each(function(){
  row7arr.push($(this).attr('class'));
});
console.log(row7arr);

var row8arr = [];
$('i','.chessRow_eight').each(function(){
  row8arr.push($(this).attr('class'));
});
console.log(row8arr);

var board = [row1arr, row2arr, row3arr, row4arr, row5arr, row6arr, row7arr, row8arr];

/***********CLASS DEMO************
console.log(board.join('\n') + '\n\n');

board[6][3] = board [4][3];
board [4][3] = ' ';

console.log(board.join('\n'));
**********************************/
  var counter = 0;
$('#move').click(function (e){
  e.preventDefault();
  counter++;
  console.log(counter);


  switch (true) {
    case counter == 1:
      var move1 = board[6][3];
      board[4][3] = board[6][3];
      board[6][3] = ' ';
      $('i','.col4').addClass(move1);   //ADDS TO EVERY COL4
      console.log(move1);
      break;
  }

});
