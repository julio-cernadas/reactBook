// import React from 'react';
import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

class Square extends Component {
    render() {
        return (
            <Fragment>
                <p>I am</p>
                <p>returning a list</p>
                <p>of things!</p>
            </Fragment>
        )
    };
}


ReactDOM.render(
    <Square />,
    document.getElementById('root')
);
