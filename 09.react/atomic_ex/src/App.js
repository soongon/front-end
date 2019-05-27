// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import SalesRanking from './components/SalesRanking'

const productData = [
  {name:'Product 1', url:'http://www.example.com/p1'},
  {name:'Product 2', url:'http://www.example.com/p2'},
  {name:'Product 3', url:'http://www.example.com/p3'},
  {name:'Product 4', url:'http://www.example.com/p4'},
]
const users = [
  {name:'user00'},
  {name:'user01'},
  {name:'user02'}
]

const regions = [
  {name:'Korea', code:'KO'},
  {name:'Japan', code:'JR'}
]

class App extends Component {
  render() {
  return (
    <div className="App">
      <SalesRanking items={productData} users = {users} regions = {regions}></SalesRanking>
    </div>
  )
  }
}

export default App

