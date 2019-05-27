import React, { Component } from 'react'

class InformationArea extends Component {
    constructor(props) {
        super(props);
        this.handleOpenEverything = this.handleOpenEverything.bind(this);
        this.state = {
            flag: false // 상황에 따라 State를 갖도록 할 때도 있음
        }
    }

    handleOpenEverything() {
        this.setState({
            flag: !this.state.flag
        })
    }

    render() {
        // State와 Props를 역할에 따라 나누어 사용
        return (
            <div>
                <p>전화번호: <a href={`tel: ${this.props.tel}`}>AAA</a></p>
                <p>이메일 주소: <a href={`mailto:${this.props.mail}`}>${this.props.mail}</a></p>
                {/* 자기가 정의한 이벤트 핸들러 */}
                <button onClick={this.handleOpenEverything} >
                더 자세한 정보 보기
                </button>
                {/* 자신의 State를 확인하여 CSS 변경 */}
                <div style={{display: this.state.flag ? 'block' : 'none'}}>
                    <p>소속: <a href={this.props.organization}>{this.props.organization}</a></p>
                    <p>SNS 계정: <a href={this.props.account}>{this.props.account}</a></p>
                </div>
            </div>
        )
    }   
}
export default InformationArea