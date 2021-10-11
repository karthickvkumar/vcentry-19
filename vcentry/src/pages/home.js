import React, { Component } from "react";
import {NavLink} from 'react-router-dom'; 
import axios from 'axios';

class HomePage extends Component{

  constructor(props){
    super(props);
    this.state = {
      userList : []
    }
  }

  onLoadAPI(){
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        let serverResult = response.data;
        this.setState({
          userList : serverResult.data
        })
      })
      .catch((error) => { 
        console.log(error)
      })
  }

  render(){
    const user = this.state.userList.map((value, index) => {
      return(
        <h1 key={index}>{value.first_name}</h1>
      )
    })

    return(
      <div>
        <h1>This is a Home Page !!</h1>
        <NavLink to="/contact">Go to Contact Page</NavLink>
        <br />
        <NavLink to="/login">Go for Login</NavLink>
        <br/>
        <button onClick={() => this.onLoadAPI()}>Trigger GET API</button>
        {user}
      </div>
    )
  }
}

export default HomePage;