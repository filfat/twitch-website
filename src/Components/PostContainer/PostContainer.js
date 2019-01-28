import React, { Component } from 'react';

import './PostContainer.css';

class PostContainer extends Component {
    render() {
        return (
			<div className="PostContainer">
                <div className="container">
                    <div class="section-title">{this.props.title}</div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PostContainer;