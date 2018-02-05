import React from 'react';

export default class Counter extends React.Component {
    render() {
        const counterStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };
        return (
            <div style={counterStyle}>
                {this.props.display}
            </div>
        );
    }
}