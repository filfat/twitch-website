import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utils/API';

import Banner from '../../Components/Banner';
import PostContainer from '../../Components/PostContainer';
import Post from '../../Components/Post';

class Blog extends Component {
    state = {}

    componentDidMount() {
        const self = this;
        API.Prismic.then(api => {
            api.getSingle('blog').then((document) => {
                self.setState({ doc: document });
            });
        });
    }

    render() {
        if (!this.state.doc) return <div>Loading...</div>

        if(!this.props.match.params.uid) {
            let promoted_posts = [];
            for (let i = 0; i < this.state.doc.data.promoted_posts.length; i++) {
                const post = this.state.doc.data.promoted_posts[i].post;
                promoted_posts.push(<Post key={`promoted_post_${i}`} uid={post.uid}/>);
            }

            let posts = [];
            for (let i = 0; i < this.state.doc.data.posts.length; i++) {
                const post = this.state.doc.data.posts[i].post;
                posts.push(<Post key={`post_${i}`} uid={post.uid}/>);
            }

            return (
                <div className="View BlogPage">
                    <Banner image={this.state.doc.data.banner_image.url}></Banner>
                    <PostContainer title="Pinned Posts">
                        {promoted_posts}
                    </PostContainer>

                    <PostContainer title="All Posts">
                        {posts}
                    </PostContainer>
                </div>
            );
        }

        return(
            <div className="View BlogPage">
                <Banner image={this.state.doc.data.banner_image.url}></Banner>
                <PostContainer>
                    <Post uid={this.props.match.params.uid}/>

                    <Link to="/blog" class="post-div-link">Back to all posts</Link>
                </PostContainer>
            </div>
        )
    }
}

export default Blog;