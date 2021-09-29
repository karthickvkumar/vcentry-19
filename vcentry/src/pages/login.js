import React, { Component } from 'react';

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    }
  }

  onHandleInput = (event) => {
    //Property Method
    console.log(event.target.value)
  }

  render(){
    return(
      <div id="login-page">
        <h1>Login Page</h1>
        <img src={require("../image/shinchu.jpg").default} className="image" 
        alt="profile"/>

        <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349" alt="profile" className="image" />
        <div className="space-bottom">
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="email" placeholder="Please enter your email id.." onChange={this.onHandleInput}/>
        </div>
        <div className="space-bottom">
          <label className="label">Enter your Password :</label>
          <input className="input"  type="password" placeholder="Please enter your password.." onChange={this.onHandleInput}/>
        </div>
        <button>Login</button>
      </div>
    )
  }
}

export default LoginPage;