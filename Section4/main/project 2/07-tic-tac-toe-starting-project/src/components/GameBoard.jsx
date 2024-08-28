import { useState } from "react";
const initialGameBoarder=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({onSellectSquare, activePlayerSympol}){
    const [gameBoard,setGameBoard] = useState(initialGameBoarder);

    function handleSellectSquare(rowIndex,colIndex){
        setGameBoard((prevGamePoard)=>{
            const updatedBoard = [...prevGamePoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]=activePlayerSympol;
            return updatedBoard;
        }

        );
        onSellectSquare();
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