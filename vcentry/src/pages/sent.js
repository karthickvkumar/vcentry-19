import React, {Component} from "react";
import axios from "axios";

class SentPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      name : '',
      job : ''
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onUpdateUser(){
    const url = "https://reqres.in/api/users/2";

    axios.put(url, this.state)
      .then((response) => {
        var serverData = response.data;
        console.log(serverData);
        alert("Updated User Profile Successfully")
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong..")
      })
  }

  render(){
    return(
      <div>
        <h1>THis is a Sent Page</h1>
        <div>
          <label>Update your Name :</label>
          <input type="text" placeholder="Pls update your name" onChange={this.onHandleInput} name="name"/>
        </div>
        <div>
          <label>Update your Job Role :</label>
          <input type="text" placeholder="Pls update your job role" onChange={this.onHandleInput} name="job"/>
        </div>
        <button onClick={() => this.onUpdateUser()}>Update Profile</button>
      </div>
    )
  }
}

export default SentPage;