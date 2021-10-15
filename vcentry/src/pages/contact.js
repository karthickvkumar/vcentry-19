import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import Header from '../components/header';

class ContactPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      username : "Mr.Abc"
    };
    console.log("Triggered --> Constructor Method");
  }

  componentWillMount(){
    console.log("Triggered --> ComponentWillMount Method")
  }

  componentDidMount(){
    console.log("Triggered --> ComponentDidMount Method")
  }

  onChangeUser(){
    this.setState({
      username : "Miss.Xyx"
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState)
    console.log("Triggered --> ShouldComponentUpdate Method");
    return true;
  }

  componentWillUpdate(){
    console.log("Triggered --> ComponentWillUpdate Method");
  }

  componentDidUpdate(){
    console.log("Triggered --> ComponentDidUpdate Method");
  }

  componentWillUnmount(){
    console.log("Triggered --> ComponentWillUnmount Method");
  }


  render(){
    console.log("Triggered --> Render Method");

    return(
      <div>
        <Header></Header>
        <h1>This is a Contact Page !!</h1>
        <h1>Welcome, {this.state.username}</h1>
        <button onClick={() => this.onChangeUser()}>Change User</button>
        <NavLink to="/">Go Back !</NavLink>
      </div>
    )
  }
}

export default ContactPage;