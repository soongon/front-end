import React, { Component } from 'react';

class LightSwitch extends Component {
 constructor() {
    super()
    this.handleClick = this.handleClick.bind(this) 
    this.state = {
        power: false
    }
 }

 handleClick() {

    this.setState({ //설명 1
        power: !this.state.power
    })
 }
 render() {
    return (
    <div>
        <p>{this.state.power ? 'ON' : 'OFF'}</p>
        <button onClick = {this.handleClick}>Switch</button>
    </div>
    )
 }
}
export default LightSwitch 