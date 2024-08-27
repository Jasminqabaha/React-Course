import Player from "./components/Player.jsx"
function App() {
  

  return (
     <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="Player1" sympol="x"></Player>
        <Player initialName="Player2" sympol="o"></Player>
        </ol>
        game poard
      </div>
     </main>
  )
}

export default App
