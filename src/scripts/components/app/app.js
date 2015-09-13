'use strict';

import React from 'react';
import WelcomeMessage from '../welcome-message/welcome-message';
import AgeCounter from '../age-counter/age-counter';

var data = [
    { 'name': 'Daniel' },
    { 'name': 'Alvaro' },
    { 'name': 'Eduardo' }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <AgeCounter name={'Daniel'} daysOld={0} />
                <WelcomeMessage data={data} />
            </div>
        );
    }
}

React.render(<App />, document.getElementById('app'));

export default App;
