import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';
import Routes from './component/Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
