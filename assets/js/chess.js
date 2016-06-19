$(document).ready(function(){

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
var row0arr = [];
$('i','.chessRow_zero').each(function(){
  row0arr.push($(this).attr('class'));
});
console.log(row0arr);

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

var board = [row0arr, row1arr, row2arr, row3arr, row4arr, row5arr, row6arr, row7arr];

/***********CLASS DEMO************
console.log(board.join('\n') + '\n\n');

board[6][3] = board [4][3];
board [4][3] = ' ';

console.log(board.join('\n'));
**********************************/

  var counter = 0;

  $('#forwardMove').click(function(e){
      e.preventDefault();
      counter++;
      click(counter);
      console.log(counter);
    });
  $('#backwardMove').click(function(e){
      e.preventDefault();
      counter--;
      click(counter);
      console.log(counter);
    });
  $('#forwardAll').click(function(e){
      e.preventDefault();
      counter = 9;
      click(counter);
      console.log(counter);
    });
  $('#backwardAll').click(function(e){
      e.preventDefault();
      counter = 0;
      click(counter);
      console.log(counter);
    });

function click(counter){

  switch (counter) {
    case 1:
      var move1 = board[6][3];
      board[4][3] = board[6][3];
      board[4][3] = ' ';
      $('.chessRow_four').find('#r4c3').addClass(move1).css('background-color','lightblue');   //ADDS TO EVERY COL4
      $('.chessRow_six').find('#r6c3').removeClass(move1);
      console.log(move1);
      break;
    case 2:
      var move2 = board[0][6];
      board[2][5] = board[0][6];
      board[0][6] = ' ';
      $('.chessRow_two').find('#r2c5').addClass(move2).css('background-color','lightblue');
      $('.chessRow_zero').find('#r0c6').removeClass(move2);
      console.log(move2);
      break;
    case 3:
      var move3 = board[6][2];
      board[4][2] = board[6][2];
      board[6][2] = ' ';
      $('.chessRow_four').find('#r4c2').addClass(move3).css('background-color','lightblue');
      $('.chessRow_six').find('#r6c2').removeClass(move3);
      break;
    case 4:
      var move4 = board[1][4];
      board[2][4] = board[1][4];
      board[1][4] = ' ';
      $('.chessRow_two').find('#r2c4').addClass(move4).css('background-color','lightblue');
      $('.chessRow_one').find('#r1c4').removeClass(move4);
      break;
//    5)  [6][6] --> [5][6]
    case 5:
      var move5 = board[6][6];
      board[5][6] = board[6][6];
      board[6][6] = ' ';
      $('.chessRow_five').find('#r5c6').addClass(move5).css('background-color','lightblue');
      $('.chessRow_six').find('#r6c6').removeClass(move5);
      break;
//    6)  [1][3] --> [3][3]
    case 6:
      var move6 = board[1][3];
      board[3][3] = board[1][3];
      board[1][3] = ' ';
      $('.chessRow_three').find('#r3c3').addClass(move6).css('background-color','lightblue');
      $('.chessRow_one').find('#r1c3').removeClass(move6);
      break;
//    7)  [7][5] --> [6][6]
    case 7:
      var move7 = board[7][5];
      board[6][6] = board[7][5];
      board[7][5] = ' ';
      $('.chessRow_six').find('#r6c6').addClass(move7).css('background-color','lightblue');
      $('.chessRow_seven').find('#r7c5').removeClass(move7);
      break;
//    8)  [0][5] --> [1][4]
    case 8:
      var move8 = board[0][5];
      board[1][4] = board[0][5];
      board[0][5] = ' ';
      $('.chessRow_one').find('#r1c4').addClass(move8).css('background-color','lightblue');
      $('.chessRow_zero').find('#r0c5').removeClass(move8);
      break;
//    9)  [7][6] --> [5][5]
    case 9:
      var move9 = board[7][6];
      board[5][5] = board[7][6];
      board[7][6] = ' ';
      $('.chessRow_five').find('#r5c5').addClass(move9).css('background-color','lightblue');
      $('.chessRow_seven').find('#r7c6').removeClass(move9);
      break;
  }
}
  //BUTTONS MOVE COUNTER BACK-- AND FORTH++
  //ALL BUTTONS MOVE COUNTER BACK=0, FORWARD=9



});
