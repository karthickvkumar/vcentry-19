import React, { Component } from 'react';

class LoginPage extends Component{

  render(){
    return(
      <div id="login-page">
        <h1>Login Page</h1>
        <img src={require("../image/shinchu.jpg").default} className="image" 
        alt="profile"/>

        <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349" alt="profile" className="image" />
      </div>
    )
  }
}

export default LoginPage;