import React, { Component } from 'react';

import Banner from '../../Components/Banner';
import VideoContainer from '../../Components/VideoContainer';

class Home extends Component {
    render() {
        return (
			<div className="View HomePage">
                <Banner></Banner>
                <VideoContainer />
			</div>
        );
    }
}

export default Home;
