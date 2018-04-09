import React from 'react';

export default class TodoItems extends React.Component {

    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(key) {
        alert('hi' + key);
    }

    render() {

        // 먼저 상위 컴포넌트에서 전달해준 props를 가져온다.
        const todoEntries = this.props.entries;

        const listItems = todoEntries.map((item) =>
            <li onClick={() => this.deleteItem(item.key)} key={item.key}>{item.data}</li>
        );

        return (
            <ul className='theList'>
                {listItems}
            </ul>
        );
    }
}