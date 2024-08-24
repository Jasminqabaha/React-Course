import headerImg from "../src/assets/react-core-concepts.png"
import {CORE_CONCEPTS} from "../src/data.js"

const reatcDescription=["Fundimental",'Crucle','Core'];

function getRandom(max){
return Math.floor(Math.random()*(max+1));
}

function Header() {
  const develop= reatcDescription[getRandom(2)];
  return (
  <header>
  <img src={headerImg} alt="Stylized atom" />
  <h1>React Essentials</h1>
  <p>
    {develop} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>
);
}
function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {
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
        
      </main>
    </div>
  );
}

export default App;
