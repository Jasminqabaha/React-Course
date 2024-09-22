import { useState, useCallback } from "react";
import QUASTIONS from "../quastions.js"
import quizCompleted from "../assets/quiz-complete.png"
import QuestionTimer from "./QuastionTimer.jsx";

export default function Quiz(){
const [userAnswers,setUserAnswers]= useState([]);
const activeQuastionIndex = userAnswers.length;

const quizIsCompleted = QUASTIONS.length == activeQuastionIndex;

const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prev)=>{
        return [
            ...prev,
            selectedAnswer
        ];
    }
    );
},[]
); 

const handleSkipAnswer = useCallback(
    ()=>handleSelectAnswer(null)
    ,[]
);

if(quizIsCompleted)
{
    return (
        <div id="summary">
            <img src={quizCompleted} alt="quiz completed" />
            <h2>Quiz Completed!</h2>
        </div>
    );
}

const shuffledAnswers= QUASTIONS[activeQuastionIndex].answers;
shuffledAnswers.sort(()=>Math.random()-0.5);

return (
    <div id="quiz">
    <div id="quastion">
        <QuestionTimer
        key={activeQuastionIndex}
         timeout={10000} 
         onTimeout={handleSkipAnswer}
         />
        <h2>{QUASTIONS[activeQuastionIndex].text}</h2>
        <ul id="answers">
            {shuffledAnswers.map(
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