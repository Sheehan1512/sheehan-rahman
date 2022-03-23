import React from "react";
import './HomePage.css';
import SheehanDP from './sheehan.png';
import Intro from "./Intro/Intro";


function HomePage() {
    return(
        <section id="homepage">
            {/* <section id="homepage-content"> */}
            <figure id="sheehan-images">
                <img src={SheehanDP} alt="sheehan" />
            </figure>
            <div id="content">
                <h1>HEY THERE <br></br>
                    I AM <span>SHEEHAN</span> <br></br>
                    AND <br></br>
                    I AM A <br></br>
                    <span>STARTUPRENEUR</span></h1>
            </div>
            {/* </section> */}
        </section>
    );
}

export default HomePage;