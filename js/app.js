///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
let determine_first_player;
let x_wins = 0;
let o_wins = 0;
let ties= 0

///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");


///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;
document.getElementById("reset-scoreboard").onclick = resetScoreboard;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  do {
    var first_Player = prompt("Enter X or O to declare the first player: ");
    if (first_Player === null) {
      turn = "X";
      break;
    } else if (first_Player === "X" || first_Player === "x") {
      turn = "X";
    } else if (first_Player === "O" || first_Player === "o") {
      turn = "O";
    } else {
      determine_first_player = 0;
    }
  } while (first_Player !== "X" && first_Player !== "x" && first_Player !== "O" && first_Player !== "o");

  win = null;

  render();
}
