import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import HomePage from './pages/home';

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;