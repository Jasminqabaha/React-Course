import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  

  return (
     <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="Player1" sympol="x"></Player>
        <Player initialName="Player2" sympol="o"></Player>
        </ol>
        <GameBoard/>
      </div>
     </main>
  )
}

export default App
