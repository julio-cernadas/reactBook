// import React from 'react';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';




class Circle extends React.Component {
    render() {
        var circleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block", backgroundColor: this.props.bgColor, borderRadius: "50%",
            width: 100,
            height: 100,
        };
        return (
            <div style={circleStyle}> </div>
        );
    }
}


var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363",
              "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

function showCircle() {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random() * colors.length);
    // return a Circle with a randomly chosen color
    return <Circle bgColor={colors[ran]} />;
}

var renderData = [];

for (var i = 0; i < colors.length; i++) {
    renderData.push(<Circle bgColor={colors[i]} key={i}/>);
}

console.log(renderData);


ReactDOM.render(
    <div>
        {renderData}
    </div>,
    document.querySelector("#container")
);