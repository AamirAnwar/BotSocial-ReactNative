import React from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/';
import thunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Profile from './components/Profile';
import {Router, Scene, Stack} from 'react-native-router-flux';
// import promise from 'redux-promise';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(thunk))} >
        {/* <LoginForm /> */}
        <Router>
          <Stack key="root">
            <Scene key="login" component={LoginForm} title="Login"></Scene>
            <Scene key="home" component={Home} title="Stories"></Scene>
            <Scene key="profile" component={Profile} title="Profile"></Scene>
          </Stack>

        </Router>
      </Provider>
    );
  }
}
