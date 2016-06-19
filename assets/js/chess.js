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

  //BUTTONS MOVE COUNTER BACK-- AND FORTH++
  //ALL BUTTONS MOVE COUNTER BACK=0, FORWARD=9

  $('#forwardMove').click(function(e){
      e.preventDefault();
      counter++;
      click(counter);
      console.log(counter);
    });
  $('#backwardMove').click(function(e){
      e.preventDefault();
      counter--;
      down(counter);
      console.log(counter);
    });
  $('#forwardAll').click(function(e){
      e.preventDefault();
      counter = 9;
      fastforward(counter);
      console.log(counter);
    });
  $('#backwardAll').click(function(e){
      e.preventDefault();
      rewind(counter=0);
      console.log(counter);
    });

function click(counter){

  switch (counter) {
    case 1:
      var move1 = board[6][3];
      board[4][3] = board[6][3];
      board[4][3] = '';
      $('.chessRow_four').find('#r4c3').addClass(move1).css('background-color','lightblue');   //ADDS TO EVERY COL4
      $('.chessRow_six').find('#r6c3').removeClass();
      console.log(move1);
      break;
    case 2:
      var move2 = board[0][6];
      board[2][5] = board[0][6];
      board[2][5] = '';
      $('.chessRow_two').find('#r2c5').addClass(move2).css('background-color','lightblue');
      $('.chessRow_zero').find('#r0c6').removeClass();
      console.log(move2);
      break;
    case 3:
      var move3 = board[6][2];
      board[4][2] = board[6][2];
      board[4][2] = '';
      $('.chessRow_four').find('#r4c2').addClass(move3).css('background-color','lightblue');
      $('.chessRow_six').find('#r6c2').removeClass();
      break;
    case 4:
      var move4 = board[1][4];
      board[2][4] = board[1][4];
      board[2][4] = '';
      //EXCEPTION - had to add specific icon class in order to work. with move4, following the pattern from the other cases, it would return an empty string as the class agian.
      $('.chessRow_two').find('#r2c4').addClass("flaticon-chess-pawn p1").css('background-color','lightblue');
      $('.chessRow_one').find('#r1c4').removeClass();
      break;
  //    5)  [6][6] --> [5][6]
    case 5:
      var move5 = board[6][6];
      board[5][6] = board[6][6];
      board[5][6] = '';
      $('.chessRow_five').find('#r5c6').addClass("flaticon-chess-pawn p2").css('background-color','lightblue');
      $('.chessRow_six').find('#r6c6').removeClass();
      break;
  //    6)  [1][3] --> [3][3]
    case 6:
      var move6 = board[1][3];
      board[3][3] = board[1][3];
      board[3][3] = '';
      $('.chessRow_three').find('#r3c3').addClass(move6).css('background-color','lightblue');
      $('.chessRow_one').find('#r1c3').removeClass();
      break;
  //    7)  [7][5] --> [6][6]
    case 7:
      var move7 = board[7][5];
      board[6][6] = board[7][5];
      board[6][6] = '';
      $('.chessRow_six').find('#r6c6').addClass(move7).css('background-color','lightblue');
      $('.chessRow_seven').find('#r7c5').removeClass();
      break;
  //    8)  [0][5] --> [1][4]
    case 8:
      var move8 = board[0][5];
      board[1][4] = board[0][5];
      board[1][4] = '';
      $('.chessRow_one').find('#r1c4').addClass(move8).css('background-color','lightblue');
      $('.chessRow_zero').find('#r0c5').removeClass();
      break;
  //    9)  [7][6] --> [5][5]
    case 9:
      var move9 = board[7][6];
      board[5][5] = board[7][6];
      board[5][5] = '';
      $('.chessRow_five').find('#r5c5').addClass(move9).css('background-color','lightblue');
      $('.chessRow_seven').find('#r7c6').removeClass();
      break;
  }
}
function down(counter){

  switch (counter) {
    case 0:
      var move1 = board[6][3];
      board[4][3] = board[6][3];
      board[4][3] = '';
      $('.chessRow_four').find('#r4c3').removeClass().css('background-color','');  //ADDS TO EVERY COL4
      $('.chessRow_six').find('#r6c3').addClass(move1).css('background-color','');
      console.log(move1);
      break;
    case 1:
      var move2 = board[0][6];
      board[2][5] = board[0][6];
      board[2][5] = '';
      $('.chessRow_two').find('#r2c5').removeClass().css('background-color','');
      $('.chessRow_zero').find('#r0c6').addClass(move2).css('background-color','');
      console.log(move2);
      break;
    case 2:
      var move3 = board[6][2];
      board[4][2] = board[6][2];
      board[4][2] = '';
      $('.chessRow_four').find('#r4c2').removeClass().css('background-color','');
      $('.chessRow_six').find('#r6c2').addClass(move3).css('background-color','');
      break;
    case 3:
      var move4 = board[1][4];
      board[2][4] = board[1][4];
      board[2][4] = '';
      $('.chessRow_two').find('#r2c4').removeClass().css('background-color','');
      $('.chessRow_one').find('#r1c4').addClass("flaticon-chess-pawn p1").css('background-color','');
      break;
  //    5)  [6][6] --> [5][6]
    case 4:
      var move5 = board[6][6];
      board[5][6] = board[6][6];
      board[5][6] = '';
      $('.chessRow_five').find('#r5c6').removeClass().css('background-color','');
      $('.chessRow_six').find('#r6c6').addClass("flaticon-chess-pawn p2").css('background-color','');
      break;
  //    6)  [1][3] --> [3][3]
    case 5:
      var move6 = board[1][3];
      board[3][3] = board[1][3];
      board[3][3] = '';
      $('.chessRow_three').find('#r3c3').removeClass().css('background-color','');
      $('.chessRow_one').find('#r1c3').addClass(move6).css('background-color','');
      break;
  //    7)  [7][5] --> [6][6]
    case 6:
      var move7 = board[7][5];
      board[6][6] = board[7][5];
      board[6][6] = '';
      $('.chessRow_six').find('#r6c6').removeClass().css('background-color','');
      $('.chessRow_seven').find('#r7c5').addClass(move7).css('background-color','');
      break;
  //    8)  [0][5] --> [1][4]
    case 7:
      var move8 = board[0][5];
      board[1][4] = board[0][5];
      board[1][4] = '';
      $('.chessRow_one').find('#r1c4').removeClass().css('background-color','');
      $('.chessRow_zero').find('#r0c5').addClass(move8).css('background-color','');
      break;
  //    9)  [7][6] --> [5][5]
    case 8:
      var move9 = board[7][6];
      board[5][5] = board[7][6];
      board[5][5] = '';
      $('.chessRow_five').find('#r5c5').removeClass().css('background-color','');
      $('.chessRow_seven').find('#r7c6').addClass(move9).css('background-color','');
      break;
  }
}
function rewind(counter){
  counter = 0;
  $('.chessRow_zero').find('#r0c6').addClass(row0arr[6]);
  $('.chessRow_zero').find('#r0c5').addClass(row0arr[5]);
  $('.chessRow_one').find('#r1c3').addClass(row1arr[3]);
  $('.chessRow_one').find('#r1c4').addClass("flaticon-chess-pawn p1").css('background-color','');
  $('.chessRow_six').find('#r6c2').addClass(row6arr[2]);
  $('.chessRow_six').find('#r6c3').addClass(row6arr[3]);
  $('.chessRow_six').find('#r6c6').addClass("flaticon-chess-pawn p2").css('background-color','');
  $('.chessRow_seven').find('#r7c5').addClass(row7arr[5]);
  $('.chessRow_seven').find('#r7c6').addClass(row7arr[6]);
  $('.chessRow_two').find('#r2c4').removeClass().css('background-color','');
  $('.chessRow_two').find('#r2c5').removeClass().css('background-color','');
  $('.chessRow_three').find('#r3c3').removeClass().css('background-color','');
  $('.chessRow_four').find('#r4c3').removeClass().css('background-color','');
  $('.chessRow_four').find('#r4c2').removeClass().css('background-color','');
  $('.chessRow_five').find('#r5c5').removeClass().css('background-color','');
  $('.chessRow_five').find('#r5c6').removeClass().css('background-color','');
}
function fastforward(counter){
  counter = 9;
  $('.chessRow_zero').find('#r0c6').removeClass();
  $('.chessRow_zero').find('#r0c5').removeClass();
  $('.chessRow_one').find('#r1c3').removeClass();
  $('.chessRow_one').find('#r1c4').removeClass().addClass("flaticon-bishop p1").css('background-color','lightblue');
  $('.chessRow_six').find('#r6c2').removeClass();
  $('.chessRow_six').find('#r6c3').removeClass();
  $('.chessRow_six').find('#r6c6').removeClass().addClass("flaticon-bishop p2").css('background-color','lightblue');
  $('.chessRow_seven').find('#r7c5').removeClass();
  $('.chessRow_seven').find('#r7c6').removeClass();
    $('.chessRow_two').find('#r2c4').addClass("flaticon-chess-pawn p1").css('background-color','lightblue');
    $('.chessRow_two').find('#r2c5').addClass("flaticon-horse-black-head-shape-of-a-chess-piece p1").css('background-color','lightblue');
    $('.chessRow_three').find('#r3c3').addClass("flaticon-chess-pawn p1").css('background-color','lightblue');
  $('.chessRow_four').find('#r4c3').addClass("flaticon-chess-pawn p2").css('background-color','lightblue');
  $('.chessRow_four').find('#r4c2').addClass("flaticon-chess-pawn p2").css('background-color','lightblue');
  $('.chessRow_five').find('#r5c5').addClass("flaticon-horse-black-head-shape-of-a-chess-piece p2").css('background-color','lightblue');
  $('.chessRow_five').find('#r5c6').addClass("flaticon-chess-pawn p2").css('background-color','lightblue');
}
});
