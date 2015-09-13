'use strict';

import React from 'react';

class MediaSearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        this.props.onSearchBarInput(this.refs.searchInput.getDOMNode().value);
    }

    render() {
        return (
            <div>
                <div className="ui four wide center aligned column">
                    <form className="ui form">
                        <div className="field">
                            <label>Enter le text below to see the dynamicness! :D</label>
                            <input type="text" ref="searchInput" name="first-name" placeholder={this.props.placeholder} onChange={this.handleChange.bind(this)}></input>
                        </div>
                    </form>
                </div>
                <hr />
            </div>
        );
    }
}

export default MediaSearchBar;
