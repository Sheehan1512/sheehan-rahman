import { Link } from 'react-router-dom';
import JumpToLive from '../../../Media/jump-to-live.png';
import ComingSoon from '../../../Media/coming-soon.png';
import PlayIcon from '../../../Media/play-icon.png';
import './Games.css'

function Games() {
    return(
        <section id="allGames">
            <h1 id="game-section-heading">WEB GAMES I'VE MADE</h1>
            <section className="row">
                <section className="col">
                    <Link to="/games/jump-to-live">
                        <figure className="game_card">
                            <img src={JumpToLive} alt="jump" />
                            <figcaption>Jump to Live</figcaption>
                            <img className='icon' src={PlayIcon} alt="play icon" />
                        </figure>
                    </Link>
                </section>
                <section className="col">
                    <Link to="/games">
                        <figure className="game_card">
                            <img src={ComingSoon} alt="jump" />
                            <figcaption>Patience</figcaption>
                        </figure>
                    </Link>
                </section>
            </section>
        </section>
    )
}

export default Games;