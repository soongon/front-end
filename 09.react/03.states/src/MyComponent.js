import React, { Component } from 'react';

export default class MyComponent extends Component {

    state = {
        number: 5
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }


    render() {
        return (
            <div>
                <p>이름 : {this.props.name}</p>
                <p>나이 : {this.props.age}</p>
                <p>숫자 : {this.state.number}</p>

            </div>
        );
    }
}