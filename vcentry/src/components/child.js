import React, {Component} from "react";

class ChildComponent extends Component{

  onHandleInput = (event) => {
    this.props.callback(event.target.value);
  }

  render(){     
    return(
      <div>
        <h1>THis is a child component</h1>
        <p>User Name : {this.props.information.name}</p>
        <p>User Age : {this.props.information.age}</p>
        <input type="text" placeholder="Enter a Value..." onChange={this.onHandleInput}/>
      </div>
    )
  }
}

export default ChildComponent;