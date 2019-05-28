import React, {Component, Fragment} from 'react';

export default class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.handleDecreaseButton = this.handleDecreaseButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    state = {
        number: 5,
        message: ''
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    handleDecreaseButton() {
        this.setState({
            number: this.state.number - 1
        })
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });
        console.log(e.target.value);
    }

    handleEnter() {
        alert(this.state.message);
        this.setState({
            message: ''
        })
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleEnter();
        }
    }

    render() {
        return (
            <Fragment>
                <p>이름 : {this.props.name}</p>
                <p>나이 : {this.props.age}</p>
                <p>숫자 : {this.state.number}</p>
                <div>
                    <button onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }}>더하기</button>
                    <button onClick={this.handleDecreaseButton}>빼기</button>
                </div>
                <div>
                    <input type='text'
                           value={this.state.message}
                           onChange={this.handleChange}
                           onKeyPress={this.handleKeyPress}
                    />
                </div>
            </Fragment>
        );
    }
}