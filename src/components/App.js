import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from '../store';
import logo from '../images/logo.png';
import Home from './Home';
import FilesContainer from '../containers/FilesContainer';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="App-intro">
            <Switch>
              <Route key="route-home" exact path="/" component={Home} />
              <Route
                key="route-file"
                path="/files/:type?/:param1?/:param2?/:param3?"
                component={FilesContainer}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
