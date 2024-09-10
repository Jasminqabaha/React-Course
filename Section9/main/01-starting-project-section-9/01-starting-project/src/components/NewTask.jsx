import { useState } from "react";
export default function NewTask({onAdd})
{
    const [enteredTask,setEnteredTask]=useState('');
    function handleShangeEvent(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim()==='')
            return;
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input onChange={handleShangeEvent} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
            <button onClick={handleClick} className="text-stone-700 hover:text-red-500">Add Task</button>
        </div>
    );
}