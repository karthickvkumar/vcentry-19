import React, {Component} from "react";

import ChildComponent from "../components/child";

class TrashPage extends Component{

  render(){
    const data = {
      name : 'Mr.Abc',
      age : 24
    }

    return(
      <div>
        <h1>THis is a Trash Page</h1>

        <ChildComponent information={data}></ChildComponent>
      </div>
    )
  }
}

export default TrashPage;