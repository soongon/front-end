import React from 'react'

const ListEx = (props) => {
    const listItems = props.data.map(
        (index, text) => {
            return <li>{index} : {text}</li>
        })
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default ListEx