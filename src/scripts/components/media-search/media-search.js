'use strict';

import React from 'react';
import MediaSearchBar from '../media-search-bar/media-search-bar';
import MediaSearchElement from '../media-search-element/media-search-element';

class MediaSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: this.props.searchText };
    }

    onSearchBarInput(newText) {
        this.setState({
            searchText: newText
        });
    }

    render() {
        var mediaElements = this.props.media.filter(function(media) {
            return media.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
        }, this).map(function(media) {
            return (
                <div>
                    lel
                    <MediaSearchElement key={media.title} title={media.title} /><br />
                </div>
            );
        });

        if(mediaElements.length === 0) {
            mediaElements.push(
                <div>
                    No results found...
                </div>
            );
        }

        return (
            <div className="ui one column centered grid">
                <div className="ui segment">
                    <div className="ui sixteen wide center aligned column">
                        The Most Epic Media Content Search Component Ever!
                        test
                    </div>
                    <MediaSearchBar onSearchBarInput={this.onSearchBarInput.bind(this)} placeholder={this.state.searchText} />
                    {mediaElements}
                </div>
            </div>
        );
    }
}

export default MediaSearch;
