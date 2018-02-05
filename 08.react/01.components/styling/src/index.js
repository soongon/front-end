import React from 'react';
import ReactDOM from 'react-dom';
import Letter from './Letter';
import './style.css';

ReactDOM.render(
    <div>
        <Letter bgcolor='#58B3FF'>H</Letter>
        <Letter bgcolor='#FF605F'>E</Letter>
        <Letter bgcolor='#FFD52E'>L</Letter>
        <Letter bgcolor='#49DD8E'>L</Letter>
        <Letter bgcolor='#AE99FF'>O</Letter>
    </div>,
    document.getElementById('root')
);
