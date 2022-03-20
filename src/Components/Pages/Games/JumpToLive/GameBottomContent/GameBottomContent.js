import './GameBottomContent.css'

function GameBottomContent() {
  return (
    <section className="content">
        <h6 id="instruction">PRESS SPACE/CLICK ANYWHERE TO JUMP</h6>
        <button id="start" class="pink-square" onclick="window.location.reload()">Restart Game</button>
    </section>
  )
}

export default GameBottomContent;