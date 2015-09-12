'use strict';

var data = [
    { 'name': 'Daniel' },
    { 'name': 'Alvaro' },
    { 'name': 'Eduardo' }
];

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

class NameDisplay extends React.Component {
    render() {
        return (
            <h1>Hi there {this.props.name}</h1>
        );
    }
}

class WelcomeMessage extends React.Component {
    render() {
        var nodes = this.props.data.map(function(node) {
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

React.render(<WelcomeMessage data={data} />, document.getElementById('app'))
