import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from '../images/logo.png';
import Home from './Home';
import FilesContainer from '../containers/FilesContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <Route exact path="/" component={Home} />
          <Route path="/files/:index" component={FilesContainer} />
        </div>
      </div>
    );
  }
}

export default App;
