import React, { Component } from 'react';

import './ChatBox.css';

class ChatBox extends Component {
    render() {
        return (
			<div className="ChatBox">
                <iframe frameborder="0"
                    title="stream-title"
                    scrolling="yes"
                    id="chat_embed"
                    src="https://www.twitch.tv/embed/filiphsandstrom/chat"
                    height="100%"
                    width="100%">
                </iframe>
            </div>
        );
    }
}

export default ChatBox;