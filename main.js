console.log("*******Welcome To Tic Tac Toe********")
const TicTacToe=require('./ticTacToe')

const ticTacToe=new TicTacToe();
ticTacToe.displayBoard();
ticTacToe.assignSymbol();
ticTacToe.switchPlayer();