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
        winBlockCondition(computer)
        winBlockCondition(user)
        if(flag==0)
        {
            checkCorner()
        }
        rowColumnDiagonalWin()
        userPlay()
    }
    else
    {
        console.log("Game Tie!!!")
        process.exit()
    }
}

/**
 * To check Win condition for computer
 * @param {*} symbol 
 */
function winBlockCondition(symbol)
{
    if(flag==0)
    {
        computerRowWin(symbol)
    }
    if(flag==0)
    {
        computerColumnWin(symbol)
    }
    if(flag==0)
    {
        computerDiagonalWin(symbol)
    }
}

/**
 * To check winning condition for computer row  
 * @param {*} symbol 
 */
function computerRowWin(symbol)
{
    for(let row=0;row<9;row=row+3)
    {
        if(board[row]==symbol && board[row+1] == symbol && board[row+2] == (row+3))
        {
            board[row+2]=computer
            checkConditions()
        }
        else if(board[row] == symbol && board[row+2] == symbol && board[row+1] == (row+2))
        {
            board[row+1]=computer
            checkConditions()
        }
        else if(board[row+1] ==symbol && board[row+2] == symbol && board[row] == (row+1))
        {
            board[row]=computer
            checkConditions()
        }
    }
}

/**
 * To check condition for available corners
 * @param {*} symbol 
 */
function checkCorner()
{
    for(let cell=0;cell<7;cell=cell+6)
    {
        if(board[cell]==(cell+1))
        {
            board[cell]=computer
            checkConditions()
            break
        }
        else if(board[cell+2]==(cell+3))
        {
            board[cell+2]=computer
            checkConditions()
            break
        }
    }
}

/**
 * To check winning condition for computer column
 */
function computerColumnWin(symbol)
{
    for(column=0;column<9;column=column+1)
    {
        if(board[column] == symbol && board[column+3] == symbol && board[column+6] == (column+7))
        {
            board[column+6]=computer
            checkConditions()
        }
        else if(board[column] == symbol && board[column+6] == symbol && board[column+3] == (column+4))
        {
            board[column+3]=computer
            checkConditions()
        }
        else if(board[column+3] == symbol && board[column+6] == symbol && board[column] == (column+1))
        {
            board[column]=computer
            checkConditions()
        }
    }
}

/**
 * To Check winning condition for computer diagonal 
 * @param {*} symbol 
 */
function computerDiagonalWin(symbol)
{
    diagonal=0
    if(board[diagonal+2] == symbol && board[diagonal+4] == symbol && board[diagonal+6] == (diagonal+7))
    {
        board[diagonal+6]=computer
        checkConditions()
    }
    else if(board[diagonal+2] == symbol && board[diagonal+6] == symbol && board[diagonal+4] == (diagonal+5))
    {
        board[diagonal+4]=computer
        checkConditions()
    }
    else if(board[diagonal+4] == symbol && board[diagonal+6] == symbol && board[diagonal+2] == (diagonal+3))
    {
        board[diagonal+2]=computer
        checkConditions()
    }
    else if(board[diagonal] == symbol && board[diagonal+4] == symbol && board[diagonal+8] == (diagonal+9))
    {
        board[diagonal+8]=computer
        checkConditions()
    }
    else if(board[diagonal] == symbol && board[diagonal+8] == symbol && board[diagonal+4] == (diagonal+5) )
    {
        board[diagonal+4]=computer
        checkConditions()
    }
    else if(board[diagonal+4] == symbol && board[diagonal+8] == symbol && board[diagonal] == (diagonal+1))
    {
        board[diagonal]=computer
        checkConditions()
    }
}
displayBoard()
assignSymbol()
switchPlayer()

