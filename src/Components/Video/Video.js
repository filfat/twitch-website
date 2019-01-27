import React, { Component } from 'react';

import './Video.css';

class Video extends Component {
    render() {
        return (
			<div className="Video">
                <iframe
                    src="https://player.twitch.tv/?channel=filiphsandstrom&muted=true"
                    height="100%"
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen="true">
                </iframe>
            </div>
        );
    }
}

export default Video;