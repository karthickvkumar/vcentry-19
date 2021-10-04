import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/login';

class App extends Component{

  display(){
    let value = prompt("Enter a value...")
    console.log(value);
  }

  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;