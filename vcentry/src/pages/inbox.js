import React, {Component} from "react";
import axios from "axios";

class InboxPage extends Component{

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

  onSubmimtUser(){
    const url = "https://reqres.in/api/users";

    axios.post(url, this.state)
      .then((response) => {
        const serverData = response.data;
        console.log(serverData);
        alert("Successfully User Profile has been created")
      })
      .catch((error) => {
        console.log(error)
        alert("Something went wrong, pls try agina later...")
      })
  }

  render(){
    return(
      <div>
        <h1>This is a Inbox Page</h1>
        <div>
          <label>Enter your Name :</label>
          <input type="text" placeholder="Please enter your name" 
          onChange={this.onHandleInput} name="name"/>
        </div>
        <div>
          <label>Enter your Job Role :</label>
          <input type="text" placeholder="Please enter your job role"
          onChange={this.onHandleInput} name="job"/>
        </div>
        <button onClick={() => this.onSubmimtUser()}>Submit User</button>
      </div>
    )
  }
}

export default InboxPage;