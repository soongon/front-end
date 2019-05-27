import React from 'react'

const ViewFlagValue = (props) => {
    return <p>{props.flag ? '유효' : '무효'}</p> // 전달받은 데이터를 이용하여 화면만 표시
}

export default ViewFlagValue