import React, { Component } from 'react';

import './Banner.css';

class Banner extends Component {
    render() {
        return (
			<div className="Banner" style={{backgroundImage: this.props.image ? `url("${this.props.image}")` : undefined}}>
                <div className="background"></div>
            </div>
        );
    }
}

export default Banner;