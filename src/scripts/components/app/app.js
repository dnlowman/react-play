'use strict';

import React from 'react';
import WelcomeMessage from '../welcome-message/welcome-message';
import AgeCounter from '../age-counter/age-counter';
import MediaSearch from '../media-search/media-search';

// this would come from a store...
var data = [
    { 'name': 'Daniel' },
    { 'name': 'Alvaro' },
    { 'name': 'Eduardo' }
];

// this would come from a store...
var media = [
    { 'title': 'Game of Codes' },
    { 'title': 'Codeface' },
    { 'title': 'Harry Coder and the order of the Compiler' },
    { 'title': 'Codefellas' },
    { 'title': 'The Codefather' }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <MediaSearch searchText="Code" media={media} />
                <AgeCounter name={'Daniel'} daysOld={0} />
                <WelcomeMessage data={data} />
            </div>
        );
    }
}

React.render(<App />, document.getElementById('app'));

export default App;
