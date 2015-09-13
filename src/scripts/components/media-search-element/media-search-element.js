'use strict';

import React from 'react';

class MediaSearchElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui four wide center aligned column">
                <div className="ui card">
                    <div className="content">
                        <div className="header">{this.props.title}</div>
                        <div className="description">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MediaSearchElement;
