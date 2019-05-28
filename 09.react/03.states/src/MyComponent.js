import React, { Component } from 'react';

export default class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.decrease = this.decrease.bind(this);
    }

    state = {
        number: 5
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    decrease() {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div>
                <p>이름 : {this.props.name}</p>
                <p>나이 : {this.props.age}</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>더하기</button>
                <button onClick={this.decrease}>빼기</button>
            </div>
        );
    }
}