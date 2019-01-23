import React, { Component } from 'react';
import API from '../../Utils/API';

import './ChatBox.css';

class ChatBox extends Component {
    state = {}

    componentDidMount() {
        /*const chat_intervall = setInterval(() => {
            API.Get("");
        }, 500);
        this.setState({ chat_intervall });*/
    }

    render() {
        return (
			<div className="ChatBox">
                <iframe frameborder="0"
                    scrolling="yes"
                    id="chat_embed"
                    src="https://www.twitch.tv/embed/Loeya/chat"
                    height="100%"
                    width="100%">
                </iframe>
            </div>
        );
    }
}

export default ChatBox;