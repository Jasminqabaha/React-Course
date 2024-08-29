import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./components/winning-combinations.js";
import GameOver from "./components/gameOver.jsx";
const PLAYERS= {
  X: 'Player1',
  O: 'Player2'
}
const INITIAL_GAME_BOARDER=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARDER.map(inner=>[...inner])];

  for(const turn of gameTurns){
      const {square, player} = turn;
      const {row,col}= square;
      gameBoard[row][col]=player;
  }
  return gameBoard;
}

function deriveActivePlayer(gameTurns){
  let currentPlayer='X';
    if(gameTurns.length>0 && gameTurns[0].player==='X')
    currentPlayer='O';
  return currentPlayer;
}
function deriveWinner(gameBoard,players){
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
    winner = players[firstSquareSympol];
  }
}
return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns,setGameTurns]= useState([]);
  //const [activePlayer,setActivePlayer]= useState('X');

   const activePlayer=deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

const winner= deriveWinner(gameBoard,players);
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

  function handlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers =>{
     return {
        ...prevPlayers,
        [symbol]:newName
      };
  });
  }

  return (
     <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
        <Player initialName={PLAYERS.X} sympol='X' isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}></Player>
        <Player initialName={PLAYERS.O} sympol='O' isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}></Player>
        </ol>
        {(winner||hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSellectSquare={handleSellectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
     </main>
  )
}

export default App
