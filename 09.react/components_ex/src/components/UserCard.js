// import React, { Component } from 'react'

// class UserCard extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//             <p>{this.props.name}</p>
//             <p>{this.props.age}</p>
//             </div>
//         )
//     }
// }

// export default UserCard

// import React from 'react'

// const UserCard = (props) => {
//     return (
//         <div>
//         <p>{props.name}</p>
//         <p>{props.age}</p>
//         </div>
//     )
// }

// export default UserCard

import React from 'react'

const UserCard = (props) => {
    return (
    <div>
        <p>{props.name}</p>
        <button onClick={props.onClickFunction}>Click Me!</button>
    </div>
    )
}

export default UserCard