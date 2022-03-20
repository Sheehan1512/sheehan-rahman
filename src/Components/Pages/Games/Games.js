import { Link } from 'react-router-dom';
import JumpImage from '../../../Media/jumping.jpeg';
import './Games.css'

function Games() {
    return(
        <Link to="/games/jump-to-live">
            <figure>
                <img src={JumpImage} alt="jump"/>
                <figcaption>Jump to Live</figcaption>
            </figure>
        </Link>
    );
}

export default Games;