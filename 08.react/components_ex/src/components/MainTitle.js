import React from 'react'

const MainTitle = (props) => {
    return (
        <div>
            <h2><a href='{props.url}'> {props.text}</a> </h2>
        </div>
    )
}

export default MainTitle