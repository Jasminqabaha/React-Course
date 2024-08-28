import { useState } from "react";
export default function Player({initialName,sympol,isActive}){
    const [playerName,setPlayerName]= useState(initialName);
    const [isEditting,setIsEditting]= useState(false);
    function handleEditClick(){

            //setIsEditting(!isEditting)
            setIsEditting(editting=>!editting)
       
    }
    function handleChange(event){
        setPlayerName(event.target.value);

    }
    let editablePlayerName= <span className="player-name">{playerName}</span>
    let Button= "Edit"
    if(isEditting){
        editablePlayerName=<input type="text" value={playerName} onChange={handleChange} required/>
        Button= "Save"
    }
   

    return (
    <li className={isActive? 'active': undefined}>
            <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{sympol}</span>
            </span>
            <button onClick={handleEditClick}>{Button}</button>
    </li>
    );

}