import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    
    render () {
        return (
            <header>
                <div className="content">
                    <div className="logo">Loeya</div>

                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/videos">Videos</Link>
                        <Link to="/block">Blog</Link>

                        <Link to="/twitch" className="button twitch">Follow on Twitch</Link>
                        <Link to="/twitch" className="button youtube">Subscribe on Youtube</Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;