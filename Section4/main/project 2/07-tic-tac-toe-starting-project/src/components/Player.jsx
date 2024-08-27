export default function Player({name,sympol}){
    return (
    <li>
            <span className="player">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{sympol}</span>
            </span>
            <button>Edit</button>
    </li>
    );

}