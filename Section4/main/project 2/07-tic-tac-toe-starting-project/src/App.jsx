import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  const [activePlayer,setActivePlayer]= useState('X');
  function handleSellectSquare(){
    setActivePlayer(prevPlayer=> prevPlayer==='X' ? 'O' :'X' );
  }

  return (
     <main>
      <div id="game-container" >
        <ol id="players" className="highlight-player">
        <Player initialName="Player1" sympol='X' isActive={activePlayer==='X'}></Player>
        <Player initialName="Player2" sympol='O' isActive={activePlayer==='O'}></Player>
        </ol>
        <GameBoard onSellectSquare={handleSellectSquare} activePlayerSympol={activePlayer}/>
      </div>
     </main>
  )
}

export default App
