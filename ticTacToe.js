console.log("********Welcome to Tic Tac Toe Game*******")

/**
 * array of board
 */
let board=[1,2,3,4,5,6,7,8,9];

/**
 * display board
 */
function displayBoard()
{
	for(let i=0;i<7;i=i+3 )
	{
		console.log("|"+ board[i]+"|"+board[i+1]+"|"+board[i+2]+"|")
    }
}
displayBoard()