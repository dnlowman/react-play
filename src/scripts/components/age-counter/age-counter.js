'use strict';

import React from 'react';

class AgeCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { daysOld: this.props.daysOld };

        setInterval(this.updateAge.bind(this), 1000);
    }

    updateAge() {
        var birth = new Date(1993, 11, 19, 0, 0, 0, 0);
        var difference = new Date() - birth;

        this.setState({ daysOld: (difference / (1000*60*60*24)).toFixed(0) });
    }

    render() {
        return (
            <h1>{this.props.name} is currently {this.state.daysOld} days old ;O</h1>
        );
    }
}

export default AgeCounter;
