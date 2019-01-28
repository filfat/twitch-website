import React, { Component } from 'react';
import PrismicDOM from 'prismic-dom';
import HtmlParser from 'html-react-parser';

import API from '../../Utils/API';
import Logger from '../../Utils/logger';

import './Post.css';

class Post extends Component {
    state = {}

    componentDidMount() {
        const self = this;
        API.Prismic.then(api => {
            api.getByUID('post', self.props.uid).then((document) => {
                self.setState({ doc: document });
                console.log(document);
            });
        });
    }

    render() {
        if(!this.props.uid || !this.state.doc) {
            Logger.Error("incorrect id.");
            return null;
        }
        
        return (
			<div className="Post">
                <div className="title">
                    <a href={API.linkResolver(this.state.doc)}>
                        {this.state.doc.data.title[0].text}
                    </a>
                </div>
                <div className="content">
                    {HtmlParser(PrismicDOM.RichText.asHtml(this.state.doc.data.textblock, API.linkReolver))}
                </div>
                <div className="reactions"></div>
            </div>
        );
    }
}

export default Post;