import React from 'react';
import Counter from "./Counter";
import PlusButton from "./PlusButton";

export default class CounterParent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };

        return (
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <PlusButton clickHandler={this.increase} />
            </div>
        );
    }
}