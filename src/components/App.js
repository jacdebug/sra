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
          <img src1={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <Route exact path="/" component={Home} />
          {
            [
                '/files/page/:pageId',
                '/files/page/:pageId/sort/:sortby/order/:order',
                '/files/search/:attr/like/:query'
            ].map( url => <Route path={url} component={FilesContainer} /> )
          }
        </div>
      </div>
    );
  }
}

export default App;



/*
[
    '/files/page/:pageId',
    '/files/page/:pageId/sort/:sortby/order/:order',
    '/files/search/:attr/like/:query'
]
*/
