import React from 'react'

const UserList = (props) => { // 사용자 데이터는 Props로 전달받음
    const userDetails = props.users.map((user, index) =>
        <li key={index}>{user.name}</li>)

    return (
        <ul>
        {userDetails}
        </ul>
    )
}

export default UserList