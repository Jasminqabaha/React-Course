import {CORE_CONCEPTS} from "../src/data.js"
import  Header from "../src/components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept.jsx"
import TabButton from "../src/components/TabButton.jsx"
function App() {
  function handleSelect(){
    console.log("hello world---Selected!");
}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept  
        title= {CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
        />
        <CoreConcept
        {...CORE_CONCEPTS[1]}
        />
        <CoreConcept
       {...CORE_CONCEPTS[2]}
        />
        <CoreConcept
        {...CORE_CONCEPTS[3]}
        /> 

        </ul>

        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={handleSelect}>Component</TabButton>
          <TabButton onSelect={handleSelect}>JSX</TabButton>
          <TabButton onSelect={handleSelect}>Props</TabButton>
          <TabButton onSelect={handleSelect}>State</TabButton>
        </menu>

        </section>
        
      </main>
    </div>
  );
}

export default App;
