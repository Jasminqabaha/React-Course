import { useState, useCallback } from "react";
import QUASTIONS from "../quastions.js"
import quizCompleted from "../assets/quiz-complete.png"
import QuestionTimer from "./QuastionTimer.jsx";

export default function Quiz(){
const [answerState,setAnswerState]= useState('');
const [userAnswers,setUserAnswers]= useState([]);
const activeQuastionIndex = answerState === '' ? userAnswers.length : userAnswers.length-1 ;

const quizIsCompleted = QUASTIONS.length == activeQuastionIndex;

const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer){
        setAnswerState('answered');
    setUserAnswers((prev)=>{
        return [
            ...prev,
            selectedAnswer
        ];
    }
    );

    setTimeout(
        ()=>{
            if(selectedAnswer===QUASTIONS[activeQuastionIndex].answers[0])
            {
                setAnswerState('correct');
            }
            else {
                setAnswerState('wrong');
            }
            setTimeout(()=>{
                setAnswerState('');
            },2000);
        },1000);
},[activeQuastionIndex]
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
                {
                    const isSelected = userAnswers[userAnswers.length - 1] === answer;
                    let cssClass = '';
                    if(answerState==='answered' && isSelected)
                    {
                        cssClass = 'selected';
                    }
                    if((answerState==='correct' || answerState==='wrong') && isSelected)
                    {
                        cssClass=answerState;
                    }
                    return (
                    <li key={answer} className="answer">
                        <button 
                        onClick={()=>handleSelectAnswer(answer)} 
                        className={cssClass}>
                            {answer}
                        </button>
                    </li>
                    );
                }
            )}
        </ul>
    </div>
    </div>
    
);
}