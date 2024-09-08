import { useState } from "react";
import ProjectsSidebar from "../src/components/ProjectsSidebar.jsx"
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState,setProjectsState]=useState({
    SelectedProjectId:undefined,
    projects:[]
});

function handleAddProject(){
  setProjectsState(prev=>
  {
    return {
    ...prev,
    SelectedProjectId:null
    };
  }
  );
}

let content;
if(projectsState.SelectedProjectId===undefined)
  content = <NoProjectSelected onStartedAdding={handleAddProject}/>
  else if(projectsState.SelectedProjectId===null)
    content = <NewProject onStartedAdding={handleAddProject} />



  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartedAdding={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
