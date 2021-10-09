import React, { Component } from "react";
import {NavLink} from 'react-router-dom'; 
import axios from 'axios';

class HomePage extends Component{

  onLoadAPI(){
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => { 
        console.log(error)
      })
  }

  render(){
    return(
      <div>
        <h1>This is a Home Page !!</h1>
        <NavLink to="/contact">Go to Contact Page</NavLink>
        <br />
        <NavLink to="/login">Go for Login</NavLink>
        <br/>
        <button onClick={() => this.onLoadAPI()}>Trigger GET API</button>
      </div>
    )
  }
}

export default HomePage;