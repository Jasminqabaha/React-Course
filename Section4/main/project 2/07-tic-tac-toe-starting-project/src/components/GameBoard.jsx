const initialGameBoarder=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard(){
    return (
        <ol id="game-board" >
           {initialGameBoarder.map((row,rowIndex)=> (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSympol,colIndex)=>(
                            <li key={colIndex}>
                                <button>{playerSympol}</button>
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