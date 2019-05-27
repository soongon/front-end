import React from 'react';

export default class LightningCounter extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            strikes: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                strikes: this.state.strikes + 100
            })
        }, 1000);
    }

    render() {
        return (
            <h1>{this.state.strikes}</h1>
        );
    }
}