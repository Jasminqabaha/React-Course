import Player from "./components/Player.jsx"
function App() {
  

  return (
     <main>
      <div id="game-container">
        <ol id="players">
        <Player name="Player1" sympol="x"></Player>
        <Player name="Player2" sympol="o"></Player>
        </ol>
        game poard
      </div>
     </main>
  )
}

export default App
