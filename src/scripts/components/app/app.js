'use strict';

import React from 'react';
import WelcomeMessage from '../welcome-message/welcome-message';

var data = [
    { 'name': 'Daniel' },
    { 'name': 'Alvaro' },
    { 'name': 'Eduardo' }
];

class App extends React.Component {
    render() {
        return (
            <WelcomeMessage data={data} />
        );
    }
}

React.render(<App />, document.getElementById('app'));

export default App;
