'use strict';

import React from 'react';
import NameDisplay from '../name-display/name-display.js';
import TimeDisplay from '../time-display/time-display.js';

class WelcomeMessage extends React.Component {
    render() {
        var nodes = this.props.data.map((node) => {
            return (
                <div>
                    <NameDisplay name={node.name} /><br />
                    <TimeDisplay date={new Date()} paused={false} />
                </div>
            );
        });

        return (
            <div>
                {nodes}
            </div>
        );
    }
}

export default WelcomeMessage;
