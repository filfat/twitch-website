import React, { Component } from 'react';
import Video from '../Video';
import VideoThumbnail from '../VideoThumbnail';
import ChatBox from '../ChatBox';

import './VideoContainer.css';

class VideoContainer extends Component {
    render() {
        let recommended_videos = [];
        for(let i = 0; i <= 10; i++) {
            recommended_videos.push(<VideoThumbnail />);
        }

        return (
			<div className="VideoContainer">
                <div className="wrapper">
                    <div className="main-panel">
                        <div className="video">
                            <Video />
                        </div>
                        
                        <div className="recommended-videos">
                            {recommended_videos}
                        </div>
                    </div>
                    <div className="side-panel">
                        <div className="chat">
                            <ChatBox />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoContainer;