// import React from 'react';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

class LightningCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strikes: 0
        };

        this.timerTick = this.timerTick.bind(this);
    }

    timerTick() {
        this.setState({
            strikes: this.state.strikes + 100
        });
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        return (
            <h1>{this.state.strikes}</h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        var divStyle = {
            width: 250,
            textAlign: "center", backgroundColor: "black", padding: 40,
            fontFamily: "sans-serif", color: "#999", borderRadius: 10
        };
        return (
            <div style={divStyle}>
                <LightningCounter /> </div>
        );
    }
}


ReactDOM.render(
    <LightningCounterDisplay />,
    document.getElementById('container')
);
