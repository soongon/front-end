import React, { Component } from 'react'
import Hello from './Hello'
import Profile from './Profile'
import ListEx from './ListEx'

import Taro from './Taro'
import ShowName from './ShowName'

import LightSwitch from './LightSwitch';

const taro = {
  name: 'Taro',
  age: 20,
  love: 'Game'
};

const hanako = {
  name: 'Hanako',
  age: 10,
  love: 'Cats'
} 

const listData = ['foo','barr','baz']
 

class App extends Component {
  render() {
    return (
      <div>
        {/* <p>Component</p>
        <ListEx data= {listData}></ListEx>
        <Hello name="Taro"></Hello>
        <Profile data={taro} />
        <Profile data={hanako} />  */}

        {/* <ShowName>
          <Taro></Taro>
          <Taro></Taro>
          <Taro></Taro>
        </ShowName> */}

        {/* <LightSwith></LightSwith>
        <Profile></Profile> */}

        <LightSwitch></LightSwitch>

      </div>
    );
  }
}

export default App;
