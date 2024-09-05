import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [name,setName]=useState(null);

  function handelClickButton(){
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unnoun name"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handelClickButton}>Set Name</button>
      </p>
    </section>
  );
}
