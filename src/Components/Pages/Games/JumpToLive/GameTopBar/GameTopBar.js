import './GameTopBar.css';
import BackArrow from '../Assets/back-arrow.svg';

function GameTopBar() {
  return (
    <section id="game-topbar">
        <button className="back pink-square">
            <img src={BackArrow} alt="icon" />
        </button>
        <h1>JUMP TO LIVE</h1>
        <div className="score pink-square"> 
            <h6 id="scoreboard">0</h6>
        </div>
    </section>
  )
}

export default GameTopBar