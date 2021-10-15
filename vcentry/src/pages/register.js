import React, { Component } from "react";
import Header from '../components/header';

class RegisterPage extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <h1>This is a Register Page !!</h1>
        <button className="waves-effect waves-light btn">button</button>
        <button className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</button>
        <button className="waves-effect waves-light btn"><i className="material-icons right">cloud</i>button</button>
      </div>
    )
  }
}

export default RegisterPage;