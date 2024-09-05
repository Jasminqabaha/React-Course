import { useState } from "react";

export default function TimerChallenge({title,targetTime}){
    const [timeExpired,setTimeExpired]=useState(false);
    const [startTimer,setStartTimer]=useState(false);

    function handleStart(){
        setTimeout(()=>{setTimeExpired(true)},targetTime*1000);
        setStartTimer(true);
    }

    return (
    <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && "you lost!"}
        <p className="challenge-time">
            {targetTime} second{targetTime>1? 's': ''}
        </p>
        <p>
            <button onClick={handleStart}>{startTimer ? 'Stop' : 'Start'} challenge</button>
        </p>
        <p className={startTimer? 'active' : undefined}>
          {startTimer ? 'timer is running...' : 'timer unactive'}
        </p>
    </section>
    );
}