import React, { Component } from 'react'
import MainTitle from './MainTitle'
import ItemList from './ItemList'


class ItemContainer extends Component {

    constructor() {
        super();
        // 자신이 상태를 저장
        this.state = {
            items: ['Item 1','Item 2','Item 3','Item 4']
        }
        this.handleUpdateFlag = this.handleUpdateFlag.bind(this);
    }

    handleUpdateFlag() {
        this.state.items.push("AAA");
        this.setState({
            items: this.state.items
        })
    }

    render() {
        // 자식 컴포넌트에 대해 데이터를 전달하기만 함
        return (
            <div>
                <MainTitle text="My Items Page" url="https://www.example.com/" />
                <ItemList items={this.state.items} />
            </div>
        );
    }
}

export default ItemContainer