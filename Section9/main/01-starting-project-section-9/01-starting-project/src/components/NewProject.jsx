import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd,onCancle}){
    const title = useRef();
    const Description = useRef();
    const DueDate = useRef();

    const modal=useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = Description.current.value;
        const enteredDueDate = DueDate.current.value;

        if(enteredTitle.trim()===''||enteredDescription===''||enteredDueDate==='')
        {
            modal.current.open();
            return;
        }

        onAdd({
            title:enteredTitle,
            Description:enteredDescription,
            DueDate:enteredDueDate
        });
    }

        

    return(
        <>
        <Modal buttonCaption="Close" ref={modal}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid value</h2>
            <p className="text-stone-600 mb-4">Ops... it looks like you forgot to enter a value</p>
            <p className="text-stone-600 mb-4">make sure you input a valid value for every input field</p>
        </Modal>
        <div className="w-[35rem] mt-16"> 
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancle} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>

            <div>
            <Input ref={title} label="title" />
            <Input ref={Description} label="description" textarea />
            <Input ref={DueDate} label="title" />
        </div>

        </div>

        </>
    );
}