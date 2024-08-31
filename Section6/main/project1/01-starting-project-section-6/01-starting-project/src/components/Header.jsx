import logo from '../assets/logo.png';
import "../components/Header.css"
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p 
      style={{
        color: 'red',
        textAlign :'left'
        //'text-align' :'left'    alse acceptable
      }} 
      >A community of artists and art-lovers.</p>
    </header>
  );
}
