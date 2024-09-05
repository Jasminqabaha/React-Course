import { useState,useRef } from "react";

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
    <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && "you lost!"}
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
    );
}