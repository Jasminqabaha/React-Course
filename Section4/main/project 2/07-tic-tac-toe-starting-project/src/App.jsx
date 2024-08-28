import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
function App() {
  const [gameTurns,setGameTurns]= useState([]);
  const [activePlayer,setActivePlayer]= useState('X');
  function handleSellectSquare(rowIndex,colIndex){
    setActivePlayer(prevPlayer=> prevPlayer==='X' ? 'O' :'X' );
    setGameTurns((prevTurns)=>{
      let currentPlayer='X';
      if(prevTurns.length>0 && prevTurns[0].player==='X')
        currentPlayer='O';
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
        <GameBoard onSellectSquare={handleSellectSquare} turns={gameTurns}/>
      </div>
      <Log />
     </main>
  )
}

export default App
