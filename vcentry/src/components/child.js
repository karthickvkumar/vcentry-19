import React, {Component} from "react";

class ChildComponent extends Component{

  render(){
     console.log(this.props);
     
    return(
      <div>
        <h1>THis is a child component</h1>
        <p>User Name : {this.props.information.name}</p>
        <p>User Age : {this.props.information.age}</p>
      </div>
    )
  }
}

export default ChildComponent;