import React, { Component } from 'react';
class SampleButton extends Component {

 handleClick() {
    alert('button click!')
 }

 render() {
    return (
        <div>
            <button onClick={this.handleClick}>BUTTON</button>
        </div>
    )
 }
}
export default SampleButton 