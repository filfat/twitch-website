import React, { Component } from 'react';

import Banner from '../../Components/Banner';
import PostContainer from '../../Components/PostContainer';

class Blog extends Component {
    render() {
        return (
			<div className="View BlogPage">
                <Banner></Banner>
                <PostContainer>
                    
                </PostContainer>
			</div>
        );
    }
}

export default Blog;