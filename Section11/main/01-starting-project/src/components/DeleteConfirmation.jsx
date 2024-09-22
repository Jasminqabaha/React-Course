import { useEffect,useState } from "react";
import DeleteProgress from "./DeleteProgress";
const TIMER=3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect(()=>{
    console.log("the timer seted");
    const timer = setTimeout(()=>{
      onConfirm();
    },3000);

    return ()=> {
      console.log("the timer cleared");
      clearTimeout(timer);
    };
  },[onConfirm])
  


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <DeleteProgress timer={TIMER}/>
    </div>
  );
}
