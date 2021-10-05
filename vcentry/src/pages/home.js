import React, { Component } from "react";
import {NavLink} from 'react-router-dom'; 

class HomePage extends Component{

  render(){

    return(
      <div>
        <h1>This is a Home Page !!</h1>
        <NavLink to="/contact">Go to Contact Page</NavLink>
        <br />
        <NavLink to="/login">Go for Login</NavLink>
      </div>
    )
  }
}

export default HomePage;