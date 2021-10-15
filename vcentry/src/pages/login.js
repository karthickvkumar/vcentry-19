import React, { Component } from 'react';
import Header from '../components/header';

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : '',
      isVisible : true,
      showPassword : false
    }
  }

  onHandleInput = (event) => {
    //Property Method
    //console.log(event.target.value, event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit(){
    console.log(this.state)
    
    this.props.history.push("/signup");
  }

  showImage(){
    this.setState({
      isVisible : true
    })
  }

  hideImage(){
    this.setState({
      isVisible : false
    })
  }

  showPassword(status){
    this.setState({
      showPassword : status
    })
  }

  render(){

    let name = "Karhick Kumar";
    let roll_number = 47521485;
    let student = {
      name : "John Smith",
      location : "London"
    }

    return(
      <div id="login-page">
        <Header></Header>
        <h1>Login Page</h1>
        <button onClick={() => this.showImage()}>Show Image</button>
        <button onClick={() => this.hideImage()}>Hide Image</button>

        { this.state.isVisible && <div>
              <img src={require("../image/shinchu.jpg").default} className="image" 
            alt="profile"/>

            <img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"alt="profile" className="image" />
          </div>}
        

        <div className="space-bottom">
          <label className="label">Enter your Email ID :</label>
          <input className="input" type="email" placeholder="Please enter your email id.." onChange={this.onHandleInput} name="username"/>
        </div>
        <div className="space-bottom align-flex">
          <label className="label">Enter your Password :</label>
          <input className={this.state.showPassword ? "input border-red" : "input"}  
          type={this.state.showPassword ? "text" : "password"}  
          placeholder="Please enter your password.." onChange={this.onHandleInput} name="password"/>
          
        { this.state.showPassword ?  
          <img src={require("../image/open-eye.png").default} className="icon"
          onClick={() => this.showPassword(false)} alt=""/>
          :
          <img src={require("../image/close-eye.png").default} className="icon"
          onClick={() => this.showPassword(true)} alt=""/>
        }

        </div>
        <button onClick={() => this.onSubmit()}>Login</button>
        <div>
          <h1>Your email id is {this.state.username}</h1>
          <h1>Your password is {this.state.password}</h1>
        </div>

        <h1>sdnfsdnf {name}</h1>
        <h1>{roll_number}</h1>
        <h1>{student.location} -- {student.name}</h1>
      </div>
    )
  }
}

export default LoginPage;