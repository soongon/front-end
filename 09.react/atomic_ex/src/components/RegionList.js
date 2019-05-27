import React from 'react'

const RegionList = (props) => { // 지역 데이터는 Props로 전달받음
    const regionDetails = props.regions.map(({name, code}) =>
    <li key={code}>{name}</li>)

    return (
    <ul>
        {regionDetails}
    </ul>
    )
}

export default RegionList

