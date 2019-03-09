import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import HomeContainer from './containers/home/Home';
import AboutContainer from './containers/about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/about" component={AboutContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;