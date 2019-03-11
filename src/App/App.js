import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import HomeContainer from './containers/home/Home';
import AboutContainer from './containers/about/About';
import UsersContainer from './containers/users/Users';
import UserContainer from './containers/user/User';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/about" component={AboutContainer} />
              <Route exact path="/users" component={UsersContainer} />
              <Route exact path="/users/:username" component={UserContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;