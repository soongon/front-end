import React, {Fragment} from 'react';

export default function FuncDemoComponent(props) {

    return (
        <Fragment>
            <p>Hello Functional Component</p>
            <h3>Title is {props.title}</h3>
        </Fragment>
    );
}