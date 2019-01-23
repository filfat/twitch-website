import React, { Component } from 'react';

import './Post.css';

class Post extends Component {
    render() {
        return (
			<div className="Post">
                <div className="title"></div>
                <div className="content"></div>
                <div className="reactions"></div>
            </div>
        );
    }
}

export default Post;