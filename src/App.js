import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import promiseMW from 'redux-promise'

import UserDetails from './containers/userDetails'
import AddUser from './containers/addUser'

import Home from './components/home'
import Header from './components/header'
import profile from './components/profile'


const createStoreWM = applyMiddleware(promiseMW)(createStore)



function App() {
  return (
    <Provider store={createStoreWM(rootReducer)}>
      <div>

        <Router>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col">
                <Switch>
                  <Route path="/users/:id" component={UserDetails} />
                  <Route path="/profile" component={profile} />
                  <Route path = "/AddUser" component = {AddUser}></Route>
                  <Route path="/" component={Home} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>

    </Provider>
  );
}

export default App;
