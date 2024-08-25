import headerImg from "../../assets/react-core-concepts.png"
import "./Header.css"
const reatcDescription=["Fundimental",'Crucle','Core'];

function getRandom(max){
return Math.floor(Math.random()*(max+1));
}
export default function Header() {
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