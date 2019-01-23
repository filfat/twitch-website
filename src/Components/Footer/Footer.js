import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="content">
                    <div className="copyrights">
                        <span>&copy; Loeya</span>
                        <span> - </span>
                        <span>Website developed by <a href="http://twitch.tv/filiphsandstrom">Filiph Sandström</a></span>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;