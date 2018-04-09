import React from 'react';

export default class PlusButton extends React.Component {
    render() {
        const buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };

        return(
            <button onClick={this.props.clickHandler} style={buttonStyle}>+</button>
        );
    }
}