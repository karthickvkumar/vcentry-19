import React, {Component} from "react";
import axios from "axios";

class DraftPage extends Component{

  onDeleteUser(){
    const url = "https://reqres.in/api/users/2";

    axios.delete(url)
      .then((response) => {
        const serverData = response.data;
        console.log(serverData);
        alert("Successfully Deleted the User Profile");
      })
      .catch((error) => {
        console.log(error);
        alert("Something went worng")
      })
  }

  render(){
    return(
      <div>
        <h1>THis is a Draft Page</h1>
        <button onClick={() => this.onDeleteUser()}>Delete User Account</button>
      </div>
    )
  }
}

export default DraftPage;