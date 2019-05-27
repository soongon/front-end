import React from 'react';
import ReactDOM from 'react-dom';
import CounterParent from "./CounterParent";

import './style.css';

ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    document.getElementById('container')
);
