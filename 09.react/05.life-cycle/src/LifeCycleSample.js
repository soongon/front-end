import React from 'react';

export default class LifeCycleSample extends React.Component {

    state = {
        number: 0,
        color: null
    };

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    };

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        };
        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>{this.state.number}</h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}