import React, { Fragment } from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import FuncDemoComponent from "./FuncDemoComponent";

function App() {
  return (
      <Fragment>
        <MyComponent name='kim' age={40}/>
        <FuncDemoComponent title='테스트...'/>
      </Fragment>
  );
}

export default App;
