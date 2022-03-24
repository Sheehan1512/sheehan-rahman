import { useEffect } from "react";
import lottie from "lottie-web";
import carLottie from "./Assets/car.json";
import characterLottie from "./Assets/character.json";


import GameTopBar from './GameTopBar/GameTopBar'
import './JumpToLive.css'
import GameBottomContent from "./GameBottomContent/GameBottomContent";

function JumpToLive() {
  
   useEffect(() => {
    lottie.loadAnimation({
        container: document.querySelector("#car-lottie"),
        animationData: carLottie
    });
   }, [])
   useEffect(() => {
    lottie.loadAnimation({
        container: document.querySelector("#character"),
        animationData: characterLottie
    });
   }, [])

   return (
    <section id="jump-to-live">
        <GameTopBar />
        <section id="game-container">
            <section id="game">
                <section id="character" />
                <section id="car">
                    <section className="flip-horizontal" id="car-lottie" />
                </section>
                <section id="loss-container">
                    <h1 id="loss"></h1>
                </section>
            </section>
        </section>
        <GameBottomContent />
    </section>
  )
}

export default JumpToLive