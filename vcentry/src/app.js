import React, { Component } from 'react';

class App extends Component{

  display(){
    let value = prompt("Enter a value...")
    console.log(value);
  }

  render(){
    return(
      <div>
        <h1 className="heading">Hello To React JS... Welcome</h1>
        <h1 className="sub-heading">This is a App.js Component</h1>
        <button onClick={() => this.display() }>Click this Button</button>
      </div>
    )
  }

}

export default App;