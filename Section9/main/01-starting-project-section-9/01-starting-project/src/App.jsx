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

function handleStartCancleProject(){
  setProjectsState(prev=>
  {
    return {
    ...prev,
    SelectedProjectId:undefined
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
        SelectedProjectId: undefined,
        projects: [...prev.projects, newProject]
      };
    });
  }

  let content;
if(projectsState.SelectedProjectId===undefined)
  content = <NoProjectSelected onStartedAdding={handleStartAddProject}/>
  else if(projectsState.SelectedProjectId===null)
    content = <NewProject onCancle={handleStartCancleProject}  onAdd={handleAddProject} />

  
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartedAdding={handleStartAddProject} 
      projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
