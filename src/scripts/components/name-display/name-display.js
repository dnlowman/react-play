'use strict';

import React from 'react';

class NameDisplay extends React.Component {
    render() {
        return (
            <h1>Hi there {this.props.name}</h1>
        );
    }
}

export default NameDisplay;
