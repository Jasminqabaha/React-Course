import { useState } from "react";
import ProjectsSidebar from "../src/components/ProjectsSidebar.jsx"
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState,setProjectsState]=useState({
    SelectedProjectId:undefined,
    projects:[]
});

function handleStartAddProject(){
  setProjectsState(prev=>
  {
    return {
    ...prev,
    SelectedProjectId:null
    };
  }
  );
}


  function handleAddProject(projectData) {
    setProjectsState(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
  
      return {
        ...prev,
        projects: [...prev.projects, newProject] 
      };
    });
  }
console.log(projectsState);
  let content;
if(projectsState.SelectedProjectId===undefined)
  content = <NoProjectSelected onStartedAdding={handleStartAddProject}/>
  else if(projectsState.SelectedProjectId===null)
    content = <NewProject  onAdd={handleAddProject} onStartedAdding={handleStartAddProject} />

  
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartedAdding={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
