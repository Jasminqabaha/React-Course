import { useState } from "react";
import QUASTIONS from "../quastions.js"

export default function Quiz(){
const [userAnswers,setUserAnswers]= useState([]);
const activeQuastionIndex = userAnswers.length;

function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prev)=>{
        return [
            ...prev,
            selectedAnswer
        ];
    }
    );
}

return (
    <div id="quiz">
    <div id="quastion">
        <h2>{QUASTIONS[activeQuastionIndex].text}</h2>
        <ul id="answers">
            {QUASTIONS[activeQuastionIndex].answers.map(
                (answer)=>
                (
                    <li key={answer} className="answer">
                        <button onClick={()=>handleSelectAnswer(answer)} >{answer}</button>
                    </li>
                )
            )}
        </ul>
    </div>
    </div>
    
);
}