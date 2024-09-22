import { useState,useEffect } from "react";


export default function DeleteProgress({timer}){

    const [remainingTime,setRemainingTime]= useState(timer);

    useEffect(()=>
      {
      const interval = setInterval(()=>{
      setRemainingTime((prev)=>prev-10)
       },10)
      
  
      return ()=>{
        clearInterval(interval);
      };
    }
      ,[]);
      return <progress value={remainingTime} max={timer}/>
}