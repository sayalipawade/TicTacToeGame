
let read=require('readline-sync')

/**
 * constants
 */
const maximumCell=9

/**
 * variables
 */
let cellCount=0
let board=[1,2,3,4,5,6,7,8,9];
let user="X"
let computer="O"
let player=" "
let position=0
let diagonal=0
let flag=0

class TicTacToe
{
    /**
     * display board
     */
    displayBoard()
    {
        for(let i=0;i<7;i=i+3)
        {
            console.log("|"+ board[i]+"|"+board[i+1]+"|"+board[i+2]+"|")
        }
    }

    /**
     * assign symbol to the player
     */
    assignSymbol()
    {
        player="user"
        console.log("Your symbol is X")
        user="X"
        computer="O"
    }

    /**
     * To know who play first
     */
    switchPlayer()
    {
        let toss=Math.floor(Math.random()%2)
        if(toss==0)
        {
            this.userPlay()
        }
        else
        {
            this.computerPlay()
        }
    }

    /**
     * user play
     */
    userPlay()
    {
        if(cellCount<maximumCell)
        {
            position=read.question("Enter Number Between 1 to 9:")
            if(board[position-1]==position)
            {
                board[position-1]=user
                cellCount++
                this.displayBoard()
                this.rowColumnDiagonalWin(user)
            }
            else
            {
                console.log("Invalid Cell")
                this.userPlay()
            }
            this.computerPlay()
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
    rowColumnDiagonalWin(symbol)
    {
        diagonal=0
        let column=0
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
    checkConditions()
    {
        this.displayBoard()
        flag=1
        cellCount++
    }

    /**
     * Computer play like player
     */
    computerPlay()
    {
        flag=0
        if(cellCount<maximumCell)
        {
            console.log("Computer play")
            this.winBlockCondition(computer)
            this.winBlockCondition(user)
            if(flag==0)
            {
                this.checkCorner()
            }
            if(flag==0)
            {
                this.checkCenter()
            }
            this.rowColumnDiagonalWin()
            this.userPlay()
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
    winBlockCondition(symbol)
    {
        if(flag==0)
        {
            this.computerRowWin(symbol)
        }
        if(flag==0)
        {
            this.computerColumnWin(symbol)
        }
        if(flag==0)
        {
            this.computerDiagonalWin(symbol)
        }
    }

    /**
     * To check winning condition for computer row  
     * @param {*} symbol 
     */
    computerRowWin(symbol)
    {
        for(let row=0;row<9;row=row+3)
        {
            if(board[row]==symbol && board[row+1] == symbol)
            {
                board[row+2]=computer
                this.checkConditions()
            }
            else if(board[row] == symbol && board[row+2] == symbol)
            {
                board[row+1]=computer
                this.checkConditions()
            }
            else if(board[row+1] ==symbol && board[row+2] == symbol)
            {
                board[row]=computer
                this.checkConditions()
            }
        }
    }

    /**
     * To check condition for available corners
     * @param {*} symbol 
     */
    checkCorner()
    {
        for(let cell=0;cell<7;cell=cell+6)
        {
            if(board[cell]==(cell+1))
            {
                board[cell]=computer
                this.checkConditions()
                break
            }
            else if(board[cell+2]==(cell+3))
            {
                board[cell+2]=computer
                this.checkConditions()
                break
            }
        }
    }

    /**
     * To check winning condition for computer column
     */
    computerColumnWin(symbol)
    {
        for(let column=0;column<9;column=column+1)
        {
            if(board[column] == symbol && board[column+3] == symbol)
            {
                board[column+6]=computer
                this.checkConditions()
            }
            else if(board[column] == symbol && board[column+6] == symbol)
            {
                board[column+3]=computer
                this.checkConditions()
            }
            else if(board[column+3] == symbol && board[column+6] == symbol)
            {
                board[column]=computer
                this.checkConditions()
            }
        }
    }

    /**
     * To Check winning condition for computer diagonal 
     * @param {*} symbol 
     */
    computerDiagonalWin(symbol)
    {
        diagonal=0
        if(board[diagonal+2] == symbol && board[diagonal+4] == symbol)
        {
            board[diagonal+6]=computer
            this.checkConditions()
        }
        else if(board[diagonal+2] == symbol && board[diagonal+6] == symbol)
        {
            board[diagonal+4]=computer
            this.checkConditions()
        }
        else if(board[diagonal+4] == symbol && board[diagonal+6] == symbol)
        {
            board[diagonal+2]=computer
            this.checkConditions()
        }
        else if(board[diagonal] == symbol && board[diagonal+4] == symbol)
        {
            board[diagonal+8]=computer
            this.checkConditions()
        }
        else if(board[diagonal] == symbol && board[diagonal+8] == symbol)
        {
            board[diagonal+4]=computer
            this.checkConditions()
        }
        else if(board[diagonal+4] == symbol && board[diagonal+8] == symbol)
        {
            board[diagonal]=computer
            this.checkConditions()
        }
    }

    /**
     * Check condition for for center(computer) 
     */
    checkCenter()
    {
        let cell=0
        if(board[cell+4]==(cell+5))
        {
            board[cell+4]=computer
            this.checkConditions()
        }
    }
    
}
module.exports=TicTacToe;