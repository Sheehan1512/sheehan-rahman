import { useEffect, useState } from "react";
import './HomePage.css';
// import SheehanDP from './sheehan.png';
import Coder from './sheehan-personas/coder.png'
import Fifa from './sheehan-personas/fifa.png'
import Marketing from './sheehan-personas/marketing.png'
import Startupreneur from './sheehan-personas/startupreneur.png'
import Murgi from './sheehan-personas/murgi.png'

const personas = [
    {
        src: Startupreneur,
        name: 'STARTUPRENEUR'
    },
    {
        src: Coder,
        name: 'TECH ENTHUSIAST'
    },
    {
        src: Murgi,
        name: 'CHICKEN FARMER'
    },
    {
        src: Marketing,
        name: 'ONLINE STRATEGIST'
    },
    {
        src: Fifa,
        name: 'FIFA ADDICT'
    },
    {
        src: Fifa,
        name: 'FIFA ADDICT'
    }
]

function HomePage() {

    const [persona, setPersona] = useState(0);

    useEffect(() => {
        if (persona === personas.length - 1) {
            return setPersona(0);
        }
        const timerId = setTimeout(() => setPersona(prevPersona => prevPersona + 1),3000)
        return () => clearTimeout(timerId)
    }, [persona])

    return(
        <section id="homepage">
            {/* <section id="homepage-content"> */}
            <figure id="sheehan-images">
                <img src={personas[persona].src} alt="sheehan" />
            </figure>
            <div id="content">
                <h1>HEY THERE <br></br>
                    I AM <span>SHEEHAN</span> <br></br>
                    {/* AND <br></br> */}
                    I AM A <br></br>
                    <span>{personas[persona].name}</span>
                </h1>
            </div>
            {/* </section> */}
        </section>
    );
}

export default HomePage;