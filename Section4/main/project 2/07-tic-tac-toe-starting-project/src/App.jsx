import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";
import GameOver from "./components/gameOver.jsx";

const initialGameBoarder=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
    if(gameTurns.length>0 && gameTurns[0].player==='X')
    currentPlayer='O';
  return currentPlayer;
}

function App() {
  const [gameTurns,setGameTurns]= useState([]);
  //const [activePlayer,setActivePlayer]= useState('X');

   const activePlayer=deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoarder.map(inner=>[...inner])];

    for(const turn of gameTurns){
        const {square, player} = turn;
        const {row,col}= square;
        gameBoard[row][col]=player;
    }

 let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSympol=gameBoard[combination[0].row][combination[0].column];
    const secondSquareSympol=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSympol=gameBoard[combination[2].row][combination[2].column];
  
  if(firstSquareSympol &&
    firstSquareSympol === secondSquareSympol &&
    firstSquareSympol === thirdSquareSympol
  )
  {
    winner = firstSquareSympol;
  }
}
const hasDraw = gameTurns.length===9 && !winner;

function handleRematch(){
  setGameTurns([]);
}

  function handleSellectSquare(rowIndex,colIndex){
    // setActivePlayer(prevPlayer=> prevPlayer==='X' ? 'O' :'X' );
    setGameTurns((prevTurns)=>{
      const currentPlayer=deriveActivePlayer(prevTurns);
      const updatedTurnes=[
        {square:{row:rowIndex,col:colIndex},player:currentPlayer},
        ...prevTurns];
        return updatedTurnes;
    }
    );
  }

  return (
     <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
        <Player initialName="Player1" sympol='X' isActive={activePlayer==='X'}></Player>
        <Player initialName="Player2" sympol='O' isActive={activePlayer==='O'}></Player>
        </ol>
        {(winner||hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSellectSquare={handleSellectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
     </main>
  )
}

export default App
