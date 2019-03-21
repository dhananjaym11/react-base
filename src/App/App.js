import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomeContainer from './containers/home/Home';
import LoginContainer from './containers/login/Login';
import LogoutContainer from './containers/login/Logout';
import HeroesContainer from './containers/heroes/Heroes';
import HeroContainer from './containers/hero/Hero';
import UsersContainer from './containers/users/Users';
import UserContainer from './containers/user/User';
import Layout from './hoc/layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout isAuthenticated={this.props.isAuthenticated}>
            {!this.props.isAuthenticated ?
              <Redirect to="/login" /> : null}
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/logout" component={LogoutContainer} />
              <Route exact path="/heroes" component={HeroesContainer} />
              <Route exact path="/heroes/:id" component={HeroContainer} />
              <Route exact path="/users" component={UsersContainer} />
              <Route exact path="/users/:username" component={UserContainer} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);