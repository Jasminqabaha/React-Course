import headerImg from "../src/assets/react-core-concepts.png"
import componentImg from "../src/assets/components.png"
import configImg from "../src/assets/config.png"
import jsxuiImg from "../src/assets/jsx-ui.png"
import stateMgmtImg from "../src/assets/state-mgmt.png"

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
      <img src={props.img} alt={props.title} />
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
        title="Components"
        description="The UI core components"
        img={componentImg}
        />
        <CoreConcept
        title="Components"
        description="The UI core components"
        img={configImg}
        />
        <CoreConcept
        title="Components"
        description="The UI core components"
        img={jsxuiImg}
        />
        <CoreConcept
        title="Components"
        description="The UI core components"
        img={stateMgmtImg }
        />

        </ul>

        </section>
        
      </main>
    </div>
  );
}

export default App;
