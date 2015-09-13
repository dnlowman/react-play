'use strict';

import React from 'react';

class TimeDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: this.props.date, paused: this.props.paused};

        setInterval(this.updateTime.bind(this), 1000);
    }

    updateTime() {
        if(!this.state.paused) this.setState({date: new Date(this.state.date.setSeconds(this.state.date.getSeconds() + 1))});
    }

    pauseTime() {
        this.setState({paused: (this.state.paused) ? false : true});
    }

    render() {
        return (
            <div>
                <i>The current time is: {this.state.date.toTimeString()}</i>
                <button onClick={this.pauseTime.bind(this)}>Pause Time? {this.state.paused.toString()}</button>
            </div>
        );
    }
}

export default TimeDisplay;
