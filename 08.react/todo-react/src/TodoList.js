import React from 'react';
import TodoItems from "./TodoItems";
import './TodoList.css';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        // state 의 데이터의 복사본을 만든다.
        const itemArray = this.state.items;

        // 배열에 데이터를 추가하는 메서드
        // unshift : 배열의 처음에 추가
        // push : 배열의 마지막에 추가
        itemArray.unshift({
            data: this._inputElement.value,
            key: Date.now()
        });

        // setState 메서드로 상태 갱신
        this.setState({
            items: itemArray
        });

        // 인풋박스 정리
        this._inputElement.value = '';
        this._inputElement.focus();

        console.log(itemArray);
        e.preventDefault();
    }

    render() {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}