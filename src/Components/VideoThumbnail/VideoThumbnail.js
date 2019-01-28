import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../../Utils/API';
import Logger from '../../Utils/logger';

import './VideoThumbnail.css';

class VideoThumbnail extends Component {
    state = {}

    componentDidMount() {
        const self = this;
        API.Prismic.then(api => {
            api.getByUID('video', self.props.uid).then((document) => {
                self.setState({ doc: document });
            });
        });
    }

    render() {
        if(!this.props.uid || !this.state.doc) {
            Logger.Error("incorrect id.");
            return null;
        }

        return (
			<div className="VideoThumbnail">
                <Link to={"/videos" + API.linkResolver(this.state.doc)}>
                    <img alt={this.state.doc.data.title} src={this.state.doc.data.thumbnail.url} />
                    <div className="title">{this.props.title}</div>
                </Link>
            </div>
        );
    }
}

export default VideoThumbnail;