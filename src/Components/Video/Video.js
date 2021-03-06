import React, { Component } from 'react';

import './Video.css';

class Video extends Component {
    render() {
        //TODO: Handle clips/videos

        return (
			<div className="Video">
                { !this.props.uid ?
                    <iframe
                        title="main-stream"
                        src="https://player.twitch.tv/?channel=filiphsandstrom&muted=true"
                        height="100%"
                        width="100%"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                    </iframe>
                : null }
            </div>
        );
    }
}

export default Video;