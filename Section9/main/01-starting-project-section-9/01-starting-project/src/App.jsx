import { useState } from "react";
import ProjectsSidebar from "../src/components/ProjectsSidebar.jsx"
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState,setProjectsState]=useState({
    SelectedProjectId:undefined,
    projects:[],
    tasks:[]
});

function handleAddTask(text){

  setProjectsState(prev => {
    const newTask = {
      text:text,
      projectId:prev.SelectedProjectId,
      id: Math.random()
    };

    return {
      ...prev,
      tasks:[
        newTask,
        ...prev.tasks
      ]
    };
  });
}

function handleDeleteTask(id){
  setProjectsState(prev=>
    {
      return {
      ...prev,
      tasks: prev.tasks.filter(task=> task.id !== id)
      };
    }
    );
}

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
function handleDeleteProject(){
  setProjectsState(prev=>
  {
    return {
    ...prev,
    SelectedProjectId:undefined,
    projects: prev.projects.filter(project=> project.id !== prev.SelectedProjectId)
    };
  }
  );
}

function handleSelectProject(id){
  setProjectsState(prev=>
  {
    return {
    ...prev,
    SelectedProjectId:id
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

  const selectedProject = projectsState.projects.find(project=> project.id === projectsState.SelectedProjectId);
  let content = <SelectedProject tasks={projectsState.tasks} project={selectedProject} onDeleteTask={handleDeleteTask} onAddTask={handleAddTask} />
if(projectsState.SelectedProjectId===undefined)
  content = <NoProjectSelected onStartedAdding={handleStartAddProject}/>
  else if(projectsState.SelectedProjectId===null)
    content = <NewProject onCancle={handleStartCancleProject}  onAdd={handleAddProject} />

  
  

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartedAdding={handleStartAddProject} 
      projects={projectsState.projects}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.SelectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
