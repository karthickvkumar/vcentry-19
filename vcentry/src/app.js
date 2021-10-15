import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import RegisterPage from './pages/register';
import ContactPage from './pages/contact';
import MailPage from './pages/mail';

import "./css/materialize.css";

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/signup" component={RegisterPage}></Route>
          <Route path="/contact" component={ContactPage}></Route>
          <Route path="/mail" component={MailPage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;