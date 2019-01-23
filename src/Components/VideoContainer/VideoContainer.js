import React, { Component } from 'react';
import Video from '../Video';
import ChatBox from '../ChatBox';

import './VideoContainer.css';

class VideoContainer extends Component {
    render() {
        return (
			<div className="VideoContainer">
                <div className="main-panel">
                    <div className="video">
                        <Video />
                    </div>
                    
                    <div className="recommended-videos">
                        
                    </div>
                </div>
                <div className="side-panel">
                    <div className="chat">
                        <ChatBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoContainer;