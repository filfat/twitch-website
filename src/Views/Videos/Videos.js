import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../Utils/API';

import Banner from '../../Components/Banner';
import VideoContainer from '../../Components/VideoContainer';
import VideoThumbnail from '../../Components/VideoThumbnail';

class Videos extends Component {
    state = {}

    componentDidMount() {
        const self = this;
        API.Prismic.then(api => {
            api.getSingle('videos').then((document) => {
                self.setState({ doc: document });
            });
        });
    }

    render() {
        if (!this.state.doc) return <div>Loading...</div>

        if(!this.props.match.params.uid) {
            let promoted_videos = [];
            if(this.state.doc.data.promoted_videos)
                for (let i = 0; i < this.state.doc.data.promoted_videos.length; i++) {
                    const video = this.state.doc.data.promoted_videos[i].video;
                    promoted_videos.push(<VideoThumbnail key={`promoted_post_${i}`} uid={video.uid}/>);
                }

            let videos = [];
            if(this.state.doc.data.videos)
                for (let i = 0; i < this.state.doc.data.videos.length; i++) {
                    const video = this.state.doc.data.videos[i].video;
                    videos.push(<VideoThumbnail key={`post_${i}`} uid={video.uid}/>);
                }

            return (
                <div className="View BlogPage">
                    <Banner image={this.state.doc.data.banner_image.url}></Banner>
                    { promoted_videos.length ? <VideoContainer title="Pinned Posts">
                        {promoted_videos}
                    </VideoContainer> : null }

                    <VideoContainer title="All Posts">
                        {videos}
                    </VideoContainer>
                </div>
            );
        }

        return(
            <div className="View BlogPage">
                <Banner image={this.state.doc.data.banner_image.url}></Banner>
                <VideoContainer>
                    <VideoThumbnail uid={this.props.match.params.uid}/>

                    <Link to="/Videos" class="post-div-link">Back to all videos</Link>
                </VideoContainer>
            </div>
        )
    }
}

export default Videos;