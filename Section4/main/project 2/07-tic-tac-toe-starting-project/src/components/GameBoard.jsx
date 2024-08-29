
export default function GameBoard({onSellectSquare, board}){

    return (
        <ol id="game-board" >
           {board.map((row,rowIndex)=> (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSympol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>onSellectSquare(rowIndex,colIndex)} disabled={playerSympol!==null}
                                    >{playerSympol}</button>
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