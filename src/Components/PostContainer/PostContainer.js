import React, { Component } from 'react';

import './PostContainer.css';

class PostContainer extends Component {
    render() {
        return (
			<div className="PostContainer">
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PostContainer;