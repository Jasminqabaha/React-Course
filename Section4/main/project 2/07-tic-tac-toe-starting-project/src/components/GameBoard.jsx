import { useState } from "react";
const initialGameBoarder=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    const [gameBoard,setGameBoard] = useState(initialGameBoarder);

    function handleSellectSquare(rowIndex,colIndex){
        setGameBoard((prevGamePoard)=>{
            const updatedBoard = [...prevGamePoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]='X';
            return updatedBoard;
        }

        );
    }
    return (
        <ol id="game-board" >
           {gameBoard.map((row,rowIndex)=> (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSympol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>handleSellectSquare(rowIndex,colIndex)}>{playerSympol}</button>
                            </li>

                        )
                        )}
                    </ol>

                </li>
            ))
            }
        </ol>
        

    );
}