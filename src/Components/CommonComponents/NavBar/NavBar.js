import React from "react";
import { Link } from "react-router-dom";
import Logo from './logo.png'

import './NavBar.css';

function NavBar() {
    return(
        <nav>
            <Link to="/" id="logo">
                <img src={Logo} />
            </Link>
            <section id="navPanel">
                <Link to="/">HOME</Link>
                <Link to="/highlights">HIGHLIGHTS</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/games">GAMES</Link>
            </section>
            <button class="authBtn">LOGIN</button>
        </nav>
    );
}

export default NavBar;