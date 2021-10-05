import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class ContactPage extends Component{

  render(){
    return(
      <div>
        <h1>This is a Contact Page !!</h1>
        <NavLink to="/">Go Back !</NavLink>
      </div>
    )
  }
}

export default ContactPage;