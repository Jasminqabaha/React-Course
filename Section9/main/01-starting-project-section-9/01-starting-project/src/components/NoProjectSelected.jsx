import Button from "./Button.jsx";
import noProjectImage from "../assets/no-projects.png"
export default function NoProjectSelected({onStartedAdding}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="an empty task list" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="mb-4 text-stone-400">Select a project or get started with a new one!</p>
            <p className="mt-8">
                <Button onClick={onStartedAdding}>Create New Project</Button>
            </p>
        </div>
    );
}