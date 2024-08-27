import { useState } from "react";
export default function Player({name,sympol}){
    const [isEditting,setIsEditting]= useState(false);
    function handleEditClick(){

            //setIsEditting(!isEditting)
            setIsEditting(editting=>!editting)
       
    }
    let playerName= <span className="player-name">{name}</span>
    let Button= "Edit"
    if(isEditting){
        playerName=<input type="text" value={name} required/>
        Button= "Save"
    }
   

    return (
    <li>
            <span className="player">
            {playerName}
            <span className="player-symbol">{sympol}</span>
            </span>
            <button onClick={()=>handleEditClick()}>{Button}</button>
    </li>
    );

}