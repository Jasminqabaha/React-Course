import { useState,useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({title,targetTime}){
    const [timeInterval,setTimeInterval]=useState(targetTime*1000);

    const timer = useRef();
    const dialog = useRef();

    const isActive= timeInterval > 0 && timeInterval<targetTime*1000;

    if(timeInterval<=0)
    {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeInterval(targetTime*1000);
    }

    function handleStart(){
        timer.current=setInterval(()=>{
            setTimeInterval(pvetInterval=> pvetInterval-10);
        },10);
    }

    function handleEnd(){
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
        <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeInterval} onReset={handleReset} />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1? 's': ''}
        </p>
        <p>
            <button onClick={isActive ? handleEnd :handleStart }>{isActive ? 'Stop' : 'Start'} challenge</button>
        </p>
        <p className={isActive? 'active' : undefined}>
          {isActive ? 'timer is running...' : 'timer unactive'}
        </p>
    </section>
    </>
    );
}