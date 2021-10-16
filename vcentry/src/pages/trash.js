import React, {Component} from "react";

import ChildComponent from "../components/child";

class TrashPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      message : ''
    }
  }

  onReceiveValue = (value) => {
    this.setState({
      message : value
    })
  }

  render(){
    const data = {
      name : 'Mr.Abc',
      age : 24
    }

    return(
      <div>
        <h2>Received Username - {this.state.message}</h2>
        <h1>THis is a Trash Page</h1>

        <ChildComponent information={data} callback={this.onReceiveValue}></ChildComponent>
      </div>
    )
  }
}

export default TrashPage;