// import React, {Component} from 'react'
// import FlagSwitch from './FlagSwitch'
// import ViewFlagValue from './ViewFlagValue'

// class SwitchContainer extends Component {
//     constructor() {
//         super();
//         this.state = {
//         flag: false
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <FlagSwitch></FlagSwitch>
//                 <ViewFlagValue flag={this.state.flag} ></ViewFlagValue>
//             </div>
//         )
//     }
// }

// export default SwitchContainer

import React, {Component} from 'react'
import FlagSwitch from './FlagSwitch'
import ViewFlagValue from './ViewFlagValue'

class SwitchContainer extends Component {

    constructor() {
        super();
        this.handleUpdateFlag = this.handleUpdateFlag.bind(this); // this 참조를 위해 bind해둠
        this.state = {
        flag: false
        }
    }

    handleUpdateFlag() { // State 변경을 위한 이벤트 핸들러 만들기
        this.setState({
            flag: !this.state.flag
        })
    }

    // render() {
    //     return (
    //         <div>
    //             <FlagSwitch></FlagSwitch>
    //             <ViewFlagValue flag={this.state.flag} ></ViewFlagValue>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <FlagSwitch handleUpdateFlag = {this.handleUpdateFlag} ></FlagSwitch>
                <ViewFlagValue flag={this.state.flag} ></ViewFlagValue>
            </div>
        )
    }
}

export default SwitchContainer