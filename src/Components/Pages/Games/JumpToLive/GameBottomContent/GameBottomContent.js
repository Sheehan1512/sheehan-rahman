import './GameBottomContent.css'

function GameBottomContent() {
  return (
    <section className="content">
        <h6 id="instruction">PRESS SPACE/CLICK ANYWHERE TO JUMP</h6>
        <button id="start" className="pink-square" onClick="window.location.reload()">Restart Game</button>
    </section>
  )
}

export default GameBottomContent;