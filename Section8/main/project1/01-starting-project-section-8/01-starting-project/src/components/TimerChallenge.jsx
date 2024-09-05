import { useState,useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({title,targetTime}){
    const [timeExpired,setTimeExpired]=useState(false);
    const [startTimer,setStartTimer]=useState(false);
    const timer = useRef();

    function handleStart(){
        timer.current=setTimeout(()=>{setTimeExpired(true)},targetTime*1000);
        setStartTimer(true);
    }

    function handleEnd(){
        clearTimeout(timer.current);
    }

    return (
        <>
        {timeExpired && <ResultModel targetTime={targetTime} result={'Lose'}/>}
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1? 's': ''}
        </p>
        <p>
            <button onClick={startTimer ? handleEnd :handleStart }>{startTimer ? 'Stop' : 'Start'} challenge</button>
        </p>
        <p className={startTimer? 'active' : undefined}>
          {startTimer ? 'timer is running...' : 'timer unactive'}
        </p>
    </section>
    </>
    );
}