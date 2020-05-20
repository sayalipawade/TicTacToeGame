console.log("******Welcome to Tic Tac Toe*****")
let read=require('readline-sync')

/**
 * variables
 */
let cellCount=0
let maximumCell=9
let user="X"

let board=[1,2,3,4,5,6,7,8,9];

/**
 * display board
 */
function displayBoard()
{
    for(let i=0;i<7;i=i+3)
    {
        console.log("|"+ board[i]+"|"+board[i+1]+"|"+board[i+2]+"|")
    }
}

/**
 * assign symbol to the player
 */
function assignSymbol()
{
    player="user"
    console.log("Your symbol is X")
    user="X"
    computer="O"
}

/**
 * To know who play first
 */
function switchPlayer()
{
    toss=Math.floor(Math.random()%2)
    if(toss==0)
    {
        userPlay()
    }
    else
    {
       computerPlay()
    }
}

/**
 * user play
 */
function userPlay()
{
    if(cellCount<maximumCell)
    {
        position=read.question("Enter Number Between 1 to 9:")
        if(board[position-1]==position)
        {
            board[position-1]=user
            cellCount++
            displayBoard()
            rowColumnDiagonalWin(user)
        }
        else
        {
            console.log("Invalid Cell")
            userPlay()
        }
        computerPlay()
    }
    else
    {
        console.log("Game Tie")
        process.exit();
    }
}

/**
 * Function to check Winning Condition for row,column,diagonal
 * @param {*} symbol 
 */
function rowColumnDiagonalWin(symbol)
{
    diagonal=0
    column=0
    for(let row=0;row<7;row=row+3)
    {
        if((board[row] == board[row+1] && board[row+1] == board[row+2]) ||
        (board[column] == board[column+3] && board[column+3] ==  board[column+6]) ||
        (board[diagonal] == board[diagonal+4] && board[diagonal+4] == board[diagonal+8]) ||
        (board[diagonal+2] == board[diagonal+4] && board[diagonal+4] == board[diagonal+6]))
        {
            if(symbol=="X")
            {
                console.log("User Win");
                process.exit();
            }
            else
            {
                console.log("Computer Win");
                process.exit();
            }
        }   
        column=column+1
    }
}

/**
 * To Show Board Condition
 */
function checkConditions()
{
    displayBoard()
    flag=1
    cellCount++
}

/**
 * Computer play like player
 */
function computerPlay()
{
    flag=0
    if(cellCount<maximumCell)
    {
        console.log("Computer play")
        rowColumnDiagonalWin()
        userPlay()
    }
    else
    {
        console.log("Game Tie!!!")
        process.exit()
    }
    
}
displayBoard()
assignSymbol()
switchPlayer()

