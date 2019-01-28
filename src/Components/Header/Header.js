import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    
    render () {
        return (
            <header>
                <div className="content">
                    <div className="logo">
                        filiphsandstrom
                        <span className="subtitle"></span>
                    </div>

                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/videos">Videos</Link>
                        <Link to="/blog">Blog</Link>

                        <a target="_blank" href="https://twitch.tv/filiphsandstrom" className="button twitch">Follow on Twitch</a>
                        <a target="_blank" href="https://www.youtube.com/c/FiliphSandstr%C3%B6m" className="button youtube">Subscribe on Youtube</a>
                        <a target="_blank" href="https://discord.gg/eYjgRR2" className="button discord">Chat on Discord</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;